    $('.timer').countTo({
      refreshInterval: 60,
      formatter: function(value, options) {
        return value.toFixed(options.decimals);
      },
    });
