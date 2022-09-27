import * as React from "react";
import { Input, Stack, FormControl, View, Image, Button, HStack, VStack, Text } from "native-base";
import { TouchableOpacity } from "react-native-web";

import LoginImage from "../../assets/loginImage.png";
import { kontenbase } from "../lib/kontenbase";

function Register({ navigation }) {
  const [email, setEmail] = React.useState("")
  const [firstName, setFirstname] = React.useState("")
  const [password, setPassword] = React.useState("")

  const handleRegister = async (event) => { 
    event.preventDefault()

    const { error } = await kontenbase.auth.register({
      email,
      firstName,
      password,
    })

    if ( error){
      alert(error.message)
      return
    }
    
    navigation.navigate("Login")
  }

  return (
    <VStack padding="8">
      <View alignItems="center">
        <Image source={LoginImage} w="250" h="230" marginTop="60" marginBottom="10" />
      </View>

      <View fontWeight="bold">
        <Text>Register</Text>
      </View>

      <View>
        <FormControl marginTop="5">
          <Stack space={5}>
            <Stack>
              <Input border="1px black solid" backgroundColor="whitesmoke" p={2} placeholder="Email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            </Stack>
            <Stack>
              <Input border="1px black solid" backgroundColor="whitesmoke" p={2} placeholder="Name" value={firstName} onChange={(event) => setFirstname(event.target.value)} />
            </Stack>
            <Stack>
              <Input border="1px black solid" backgroundColor="whitesmoke" p={2} placeholder="Password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </Stack>
          </Stack>
        </FormControl>
      </View>

      <View>
        <Button backgroundColor="danger.500" marginTop="4" onPress={handleRegister}>
          <Text color="muted.50" fontSize="17" fontWeight="bold">
            Register
          </Text>
        </Button>
      </View>

      <View>
        <HStack justifyContent="center" marginTop="2" fontSize="16">
          <Text marginRight="1">Joined us before ?</Text>
          <TouchableOpacity fontWeight="800" onPress={() => navigation.navigate("Login")}>
            <Text color="red.500" marginleft="1" fontWeight="500">
              Login
            </Text>
          </TouchableOpacity>
        </HStack>
      </View>
    </VStack>
  );
}

export default Register;
