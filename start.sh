#!/usr/bin/env bash

function set_launchctl_maxfiles {
  local current_maxfiles_soft_limit=$(launchctl limit maxfiles | awk '{print $2}');
  local current_maxfiles_hard_limit=$(launchctl limit maxfiles | awk '{print $3}');

  if [ "$current_maxfiles_soft_limit" != "unlimited" ] && [ "$current_maxfiles_soft_limit" -lt "65535" ]; then
    local new_maxfiles_soft_limit="65535";
  else
    local new_maxfiles_soft_limit="$current_maxfiles_soft_limit";
  fi

  if [ "$current_maxfiles_hard_limit" != "unlimited" ] && [ "$current_maxfiles_hard_limit" -lt "200000" ]; then
    local new_maxfiles_hard_limit="200000";
  else
    local new_maxfiles_hard_limit="$current_maxfiles_hard_limit";
  fi

  sudo launchctl limit maxfiles $new_maxfiles_soft_limit $new_maxfiles_hard_limit;
}

function set_ulimit {
  local current_ulimit_amount=$(ulimit -n);

  if [ "$current_ulimit_amount" != "unlimited" ] &&[ "$current_ulimit_amount" -lt "65535" ]; then
    local new_ulimit_amount="65535";
  else
    local new_ulimit_amount="$current_ulimit_amount";
  fi

  ulimit -n $new_ulimit_amount;
}

function set_sysctl_kern_maxfiles {
  local current_sysctl_kern_maxfiles=$(sysctl kern.maxfiles | awk '{print $2}');

  if [ "$current_sysctl_kern_maxfiles" != "unlimited" ] && [ "$current_sysctl_kern_maxfiles" -lt "100000" ]; then
    local new_sysctl_kern_maxfiles="100000";
  else
    local new_sysctl_kern_maxfiles="$current_sysctl_kern_maxfiles";
  fi

  sudo sysctl -w kern.maxfiles=$new_sysctl_kern_maxfiles;
}

function set_sysctl_kern_maxfilesperproc {
  local current_sysctl_kern_maxfilesperproc=$(sysctl kern.maxfiles | awk '{print $2}');

  if [ "$current_sysctl_kern_maxfilesperproc" != "unlimited" ] && [ "$current_sysctl_kern_maxfilesperproc" -lt "65535" ]; then
    local new_sysctl_kern_maxfilesperproc="65535";
  else
    local new_sysctl_kern_maxfilesperproc="$current_sysctl_kern_maxfilesperproc";
  fi

  sudo sysctl -w kern.maxfilesperproc=$new_sysctl_kern_maxfilesperproc;
}

if [[ "$OSTYPE" =~ ^darwin ]]; then
  set_launchctl_maxfiles;
  set_ulimit;
  set_sysctl_kern_maxfiles;
  set_sysctl_kern_maxfilesperproc;
fi

hugo server;