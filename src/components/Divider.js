import React, {forwardRef} from 'react';
import {View} from 'react-native';

const Divider = forwardRef(({style, enabledSpacing = true}, ref) => {
  return (
    <View
      ref={ref}
      style={[
        {
          height: 1,
          backgroundColor: '#8b8989',
          marginHorizontal: enabledSpacing ? 24 : 0,
        },
        style,
      ]}
    />
  );
});

export default Divider;
