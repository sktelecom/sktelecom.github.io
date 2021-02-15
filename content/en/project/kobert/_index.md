---
title: "KoBERT"
linkTitle: "KoBERT"
weight: 4
type: docs
description: >
  Korean BERT (Bidirectional Encoder Representations from Transformers)
---

![kobert](./kobert.jpg)

KoBERT was developed to overcome the limitations of the existing [BERT](https://github.com/google-research/bert) Korean language performance. KoBERT learned a large-scale corpus consisting of millions of Korean sentences collected from Wikipedia and news, and applied a data-based tokenization technique to reflect the characteristics of irregular language changes in Korean. The token alone led to a performance improvement of over 2.6%.

KoBERT uses ring-reduce-based distributed learning technology to quickly learn large amounts of data, learning more than a billion sentences quickly on multiple machines. In addition, KoBERT contributes to the spread of language understanding services in many fields by supporting various deep learning APIs including PyTorch, TensorFlow, ONNX, and MXNet.

* GitHub : https://github.com/SKTBrain/KoBERT