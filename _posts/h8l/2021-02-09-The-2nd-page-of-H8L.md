---
layout: post
category : docs
tagline: "How to run SRT streaming services"
intro: "Hwangsaeul(H8L) opensource project - 2nd version"
img : relay-authentication.png
author : "Justin Kim"
img2 : 
img3 : 
title2 : 
title3 : 
css: 
js: 
tags : [jekyll, code, markdown]
bgcolor: 
keywords: html, css, markdown, jekyll, docs, jekyllthemes, theme
canonical: https://sktelecom.github.io

---
{% include JB/setup %}

<!--more-->

# The 2nd page of Hwangsaeul project

It's been almost a year and half since Jakub posted the [installation document](https://www.collabora.com/news-and-blog/news-and-events/low-latency-streaming-of-security-feeds-with-srt-and-gstreamer.html) of Hwangsaeul (a.k.a H8L) project. The project members are still rush to develop the project for the various use cases. Although the H8L project is originally designed to support the massive deployment of video surveillance cameras which enable SRT transmission, we found that there is much more potential when we switch the domain to UAV(Unmanned Areial Viehicle) and UGV(Unmanned Ground Vehicle). Therefore, we had to change the overall shape of H8L to optimize for the new targets.

## Deprecation of Messages Queue
The major architecture change for ​the second version of H8L is to remove the dependency on message queue by the deprecation of ​[Chamge​](https://github.com/hwangsaeul/chamge). Although the module is good for exchanging complex messages among service components, it is an overkill architecture for real-time video streaming that focuses on video quality and ultra-low latency. In addition, there are lots of message queue based platform so we decided not to keep developing duplicated effort. Instead, we re-designed that each component provides D-Bus API and local settings. Since we removed this component, unfortunately, ABI compatibility with the previous version will not be guaranteed while this project is on-going.

## Gaeul: Umbrella repository for streaming agents
Another change is done on the [Gaeul](https://github.com/hwangsaeul/gaeul). In the previous version, the module was in charge of edge streaming only. However, from the second version, it becomes a set of streaming agents; video source, relay, and even protocol conversion including transcoding. By analogy from the meaning of the word, it would be a very natural change for this module to handle the stream of data and video because *Gaeul* means babbling brook in Korean.

## New Architecture
In new H8L, there are three major repositories; Gaeul, Hwangsae, and Gaeguli.

  * Hwangsae: SRT relay library
  * Gaeguli: Video stream source library
  * Gaeul: A set of video streaming services

Since Gaeul provides all of streaming agents, it will always require *Hwangsae* and *Gaeguli* depending on the feature it uses.

![System Overview]({{ BASE_PATH }}/assets/images/blog/Justin Kim/new-diagram.png){: .image-fluid }

## Running H8L
Nightly builds are available as binary packages for Ubuntu 20.04.

```
$ sudo add-apt-repository ppa:hwangsaeul/nightly
$ sudo apt-get update
```

Note that the PPA provides important packages; libsrt and gst-plugins-bad. Since Ubuntu 20.04 provides slightly old version of those packages, some features like stream-id and SRT option strings are not supported. SRT(=1.4.2) and gst-plugins-bad with some patches that will be provided by newer version of GStreamer should be installed before using H8L features. Using PPA may be more convenient to test and have experience of H8L than building from scratch. Surely, some enhancement patches of SRT and GStreamer are already submitted to the upstream and most of them are landed onto master branch or ready for landing.  If you'd like to check the patches, you can refer to our forked repositories; [libsrt](https://github.com/hwangsaeul/libsrt) and [gst-plugins-bad](https://github.com/hwangsaeul/gst-plugins-bad).

### Source

The first agent of *Gaeul* is `gaeul2-source-agent` that is nomally simlilar to stream generator(or simply called as encoder).

```
$ sudo apt-get install gaeul2-source-agent
```

#### Settings

Before running the source agent, we need to set configurations to specify video parameters and SRT options. The settings are consist of two parts; one main configuration and multiple channel configurations.

**Main Configuration**

This configuration file is an entry point that provide capture device informations to the source agent. For the stream authentication, *Stream ID* is mandatory for H8L's source agent and `uid` will be used for stream-id prefix for channels.

`channel-configs` option takes a list of absolute file paths that are channel configurations. 

```
[org/hwangsaeul/Gaeul2/Source]
uid="device0"
channel-configs=["/etc/gaeul2/conf.d/ch0.ini", "/etc/gaeul2/conf.d/ch1.ini"]
```

**Channel Configuration**

This sub-configuration describes what type of SRT stream will be sent from which video capture device. In theory, the source agent can have an infinite number of channel configurations, but it will be limited by hardware performance. Normally, it shouldn't exceed 2 channels encoding for 4K 30fps, or equivalent video encoding parameters.

The below is an example of a channel configuration.

```
[org/hwangsaeul/Gaeul2/Source/Channel]
name="channel0"
source="v4l2src"
device="/dev/video0"
bitrate=2000000
fps=30
codec="x264"
bitrate-control="CBR"
resolution="1920x1080"
target-uri="srt://ip.address:port/?mode=caller"
passphrase=""
pbkeylen="AES-128"
prefer-hw-decoding=false
record-location="/somewhare/recording-location"
```

With `uid` of a main configuration, `name` option will be used to compose a stream-id for this channel stream. if `device0` is given for the uid and `channel0` is for the name, this video channel will have `device0_channel0` stream id.

#### Running

Now, it's time to run the source agent. If the configurations are provided correctly, user can choose D-Bus mode; `session`, `system` and `none`.

If `none` is used, the agent will not try to acquire d-bus name. Regardless `--dbus-type`, it will send stream or trying to connect to the given `target-uri` of a channel configuration until SRT stream receiver is ready.

```
$ gaeul2-source-agent -c /etc/gaeul2/gaeul.ini --dbus-type=none
```

### Debugging

If it is suspicious that the source agent sends a stream or not, the easiest way to check is to get log messages. Since all of H8L components follows GLib and GStreamer conventions, it shows log messages by setting two major environmental variables.

```
$ export G_MESSAGES_DEBUG=all
$ export GST_DEBUG=*:3
$ gaeul2-source-agent -c /etc/gaeul2/gaeul.ini --dbus-type=none
```

Then, now user can get log messages on their console.

### Relay

The relay agent plays a role to distribute SRT stream from source to users. It provides stream authentication option to distinguish SRT session by stream-id. Surely, the authentication option can be disabled when it requires the compatiblity with the legacy SRT equipment or software.

#### Settings

Unlike the source agent, the relay agent has a main configuration only. 

```
[org/hwangsaeul/Gaeul2/Relay]
uid="relay0"
sink-port=50010
source-port=60010
sink-latency=125
source-latency=125
external-ip="xxx.xxx.xxx.xxx"
authentication=true
```

* `uid`: a unique id, it is used for identifying each relay service.
* `sink-port`: a network port to be connected from a source agent.
* `source-port`: a network port to be connected from a user or video stream consumer.
* `sink-latency`, `source-latency`: SRT latency value for each connection.
* `external-ip`: usually, it is used for VM in cloud service that has an external address.
* `authentication`: an option to inteprete SRT streamid or not.

#### Running

If a configuration file is ready, it can be run with the below command. In a relay service, D-Bus API should be enabled to use a stream authentication feature. Here, it is assumed to use session-wide D-Bus API.

```
$ gaeul2-relay-agent -c /etc/gaeul2/gaeul.ini --dbus-type=session
```

#### SRT Stream authentication

The relay is relatively simple because of SRT-nature; content agnostic. However, it plays very important role as a live stream distributor. In current implmentation, the relay agent supports only SRT's live mode.

![Stream Authentication in Relay]({{ BASE_PATH }}/assets/images/blog/Justin Kim/relay-authentication.png "Stream Authentication in Relay")


The relay provides a whitelist-based stream authentication mechanism. That means, the agent should know streamid before attempting to connect. Otherwise, the agent will reject stream connection.

To allow a connection from source agent, the stream-id of source agent must be registered. Here, it assumed that the source agent uses `device0_channel0` as its stream-id.

```
$ busctl call \
    org.hwangsaeul.Gaeul2.Relay \
    /org/hwangsaeul/Gaeul2/Relay \
    org.hwangsaeul.Gaeul2.Relay \
    AddSinkToken "s" "device0_chanel0"
```

Then, if a user who has the unique id, `admin0`, wants to get a video stream of the source agent, `device0_channel0`, a source token should be registered too.

```
$ busctl call \
    org.hwangsaeul.Gaeul2.Relay \
    /org/hwangsaeul/Gaeul2/Relay \
    org.hwangsaeul.Gaeul2.Relay \
    AddSourceToken "ss" "admin0" "device0_channel0"
```

#### Playing SRT stream via Hwangsae

Currently, there are few video players that support SRT and its streamid.

* VLC Nightly build (>= 4.0) 
* GStreamer (>= 1.18)
* SRT Play Pro (iOS only)

If you are using GStreamer, you can test playing with the below command.

```
$ gst-launch-1.0 \
    srtsrc uri="srt://relay.ip:port?mode=caller" streamid="#\!::u=admin0,r=device0_channel0" ! \
    queue ! decodebin ! autovideosink
```

### See also

H8L is not all about streaming video over SRT. It is actually designed to overcome unpredictable network in two major concerns. The first is how to stream high-quality video over high bandwidth capable network, and the second is to prevent video stuttering at a discernable level even if the quality is dropped. SRT dealt with the first issue very well by congestion control, but the second issue is complicated. Without media processing and network status prediction, it will be difficult to find solution. Here, we sugguest network adaptive streaming of H8L.

* [Netowrk Adaptive Streaming in H8L](https://col.la/h8ls)
* [Low latency streaming of security video feeds with SRT and GStreamer](https://www.collabora.com/news-and-blog/news-and-events/low-latency-streaming-of-security-feeds-with-srt-and-gstreamer.html) - The first implementation of H8L

----
This article is originally posted in [Justin's blog](https://groou.com/2021/02/08/h8l-2nd/)
