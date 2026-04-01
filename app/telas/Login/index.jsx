import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import googleLogo from "../../../assets/images/google_logo.png";
import logoBranco from "../../../assets/images/procardio_logo_vertical_branco.png";
import logoVermelho from "../../../assets/images/procardio_logo_vertical_vermelho.png";

export default function Login() {
  const navigation = useNavigation();
  const route = useRoute();

  const perfil = route.params?.perfil || "paciente";
  const ehProfissional = perfil === "profissional";

  return (
    <SafeAreaView style={[estilos.safeArea, ehProfissional && estilos.safeAreaPro]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={estilos.container}
      >
        <ScrollView
          style={estilos.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity style={estilos.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={28} color={ehProfissional ? "#FFF" : "#0063c7"} />
          </TouchableOpacity>

          <View style={estilos.logoContainer}>
            <Image source={ehProfissional ? logoBranco : logoVermelho} style={estilos.logo} resizeMode="contain" />
          </View>

          <View style={estilos.formContainer}>
            <View style={estilos.inputGroup}>
              <Text style={[estilos.label, ehProfissional && estilos.textWhite]}>E-mail</Text>
              <TextInput
                style={[estilos.input, ehProfissional && estilos.inputPro]}
                placeholder="exemplo@123.com"
                placeholderTextColor={ehProfissional ? "#FFF" : "#ADADAD"}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={estilos.inputGroup}>
              <Text style={[estilos.label, ehProfissional && estilos.textWhite]}>Senha</Text>
              <TextInput
                style={[estilos.input, ehProfissional && estilos.inputPro]}
                placeholder="Digite pelo menos 6 caracteres"
                placeholderTextColor={ehProfissional ? "#FFF" : "#ADADAD"}
                secureTextEntry
              />
            </View>

            <TouchableOpacity style={estilos.forgotPassword}>
              <Text style={[estilos.forgotPasswordText, ehProfissional && estilos.textWhite]}>Esqueci a senha</Text>
            </TouchableOpacity>

            <TouchableOpacity style={estilos.loginButton} onPress={() => navigation.navigate('Drawer')}>
              <Text style={estilos.loginButtonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={estilos.registerLink}>
              <Text style={[estilos.registerLinkText, ehProfissional && estilos.textWhite]}>Quero me cadastrar</Text>
            </TouchableOpacity>
          </View>

          <View style={estilos.socialContainer}>
            <TouchableOpacity style={estilos.googleButton}>
              <Image source={googleLogo} style={estilos.socialIconImage} />
              <Text style={estilos.googleButtonText}>Entrar com Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.facebookButton}>
              <FontAwesome5
                name="facebook-f"
                color="#FFF"
                size={20}
                style={estilos.socialIcon}
              />
              <Text style={estilos.facebookButtonText}>Entrar com Facebook</Text>
            </TouchableOpacity>
          </View>

          {!ehProfissional && (
            <View style={estilos.footerContainer}>
              <Text style={estilos.footerText}>Fazer login como</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login", { perfil: "profissional" })}>
                <Text style={estilos.footerTextBold}>Profissional</Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  safeAreaPro: {
    backgroundColor: '#003d7a',
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 24,
  },
  backButton: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 40,
  },
  logo: {
    width: 150,
    height: 120,
  },
  formContainer: {
    width: '100%',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingVertical: 8,
    fontSize: 15,
    color: '#333',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
  forgotPasswordText: {
    color: '#0063c7',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#0063c7',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  registerLink: {
    alignItems: 'center',
    marginBottom: 40,
  },
  registerLinkText: {
    color: '#0063c7',
    fontSize: 15,
  },
  socialContainer: {
    width: '100%',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EDF2F7',
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 16,
  },
  socialIconImage: {
    width: 20,
    height: 20,
    position: 'absolute',
    left: 20,
  },
  googleButtonText: {
    color: '#333',
    fontSize: 15,
    fontWeight: '500',
  },
  facebookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3b5998',
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 40,
  },
  socialIcon: {
    position: 'absolute',
    left: 20,
  },
  facebookButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '500',
  },
  footerContainer: {
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 32,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4
  },
  footerText: {
    color: '#555',
    fontSize: 14,
  },
  footerTextBold: {
    fontWeight: 'bold',
    color: '#0063c7',
  },
  textWhite: {
    color: '#FFF',
  },
  inputPro: {
    borderBottomColor: "#FFF",
    color: "#FFF"
  },
});