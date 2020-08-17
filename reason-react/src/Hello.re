open ReactNative;

let containerStyle =
  Style.(
    style(
      ~flex=1.,
      ~backgroundColor="#F5FCFF",
      ~alignItems=`center,
      ~justifyContent=`center,
      (),
    )
  );

let welcomeStyle =
  Style.(style(~fontSize=20., ~textAlign=`center, ~margin=10.->pt, ()));

[@react.component]
let make = () =>
  <View style=containerStyle>
    <Text style=welcomeStyle>
      {ReasonReact.string("Open up App.js to start working on your app!")}
    </Text>
  </View>;