import React from "react";
import { Feather } from "@expo/vector-icons";
import {
  HeaderButton,
  HeaderButtons,
  Item,
  HiddenItem,
  OverflowMenu,
} from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

const IoniconsHeaderButton = (props) => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const HomeScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="register"
            iconName="person-add"
            onPress={() => alert("ลงทะเบียน")}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Feather name="home" size={30} color="#ff4465" />
      <Text>Home Screen</Text>
      <Button
        title="เกี่ยวกับเรา"
        onPress={() =>
          navigation.navigate("About", {
            email: "reactnative.tni.ac.th",
          })
        }
        Title="OPEN DRAWER"
        OnPress={() => navigation.openDrawer()}
      />
    </View>
  );
};
<<<<<<< HEAD

export default HomeScreen;
=======
export default HomeScreen;
>>>>>>> a9139ee9ca4f098da60b41e0aa516a2855ebd768
