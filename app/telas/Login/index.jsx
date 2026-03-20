import { Ionicons } from "@expo/vector-icons";
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../../assets/images/procardio_logo_vertical_vermelho.png";

export default function Login() {
    return (
        <SafeAreaView style={estilos.safeArea}>
            <KeyboardAvoidingView 
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={estilos.container}
            >
                <TouchableOpacity style={estilos.backButton}>
                    <Ionicons name="chevron-back" size={28} color={"#0063c7"} />
                </TouchableOpacity>

                <View style={estilos.logoContainer}>
                    <Image source={logo} style={estilos.logo} resizeMode="contain" />
                </View>

                <View style={estilos.formContainer}>
                    <View style={estilos.inputGroup}>
                        <Text style={estilos.label}>E-mail</Text>
                        <TextInput 
                            style={estilos.input} 
                            placeholder="exemplo@123.com"
                            placeholderTextColor="#ADADAD"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>

                    <View style={estilos.inputGroup}>
                        <Text style={estilos.label}>Senha</Text>
                        <TextInput 
                            style={estilos.input} 
                            placeholder="Digite pelo menos 6 caracteres"
                            placeholderTextColor="#ADADAD"
                            secureTextEntry
                        />
                    </View>

                    <TouchableOpacity style={estilos.forgotPassword}>
                        <Text style={estilos.forgotPasswordText}>Esqueci a senha</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
  },
  footerText: {
    color: '#555',
    fontSize: 14,
  },
  footerTextBold: {
    fontWeight: 'bold',
    color: '#0063c7',
  },
});