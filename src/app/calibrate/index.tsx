import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function CalibrateScreen() {
  const router = useRouter();

  const [landName, setLandName] = useState('');
  const [vertices, setVertices] = useState('6');
  const [area, setArea] = useState('');
  const [areaUnit, setAreaUnit] = useState('Acres');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <Pressable
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color="#1B5E20" />
          </Pressable>

          <View>
            <Text style={styles.headerTitle}>Calibrate Your Land</Text>
            <Text style={styles.headerSubtitle}>
              Step 1 of 7 • Create Land
            </Text>
          </View>
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* INTRO CARD */}
          <View style={styles.introCard}>
            <View style={styles.iconCircle}>
              <Ionicons name="map-outline" size={32} color="#2E7D32" />
            </View>

            <Text style={styles.introTitle}>Create Your Land</Text>

            <Text style={styles.introText}>
              Enter the basic details of your agricultural field. You will
              create and customize its shape in the next step.
            </Text>
          </View>

          {/* LAND NAME */}
          <View style={styles.inputSection}>
            <Text style={styles.label}>Land Name</Text>

            <View style={styles.inputWrapper}>
              <Ionicons
                name="leaf-outline"
                size={20}
                color="#78909C"
                style={styles.inputIcon}
              />

              <TextInput
                style={styles.input}
                placeholder="e.g. North Field"
                placeholderTextColor="#A0A8A2"
                value={landName}
                onChangeText={setLandName}
              />
            </View>
          </View>

          {/* VERTICES */}
          <View style={styles.inputSection}>
            <Text style={styles.label}>Number of Vertices</Text>

            <Text style={styles.helperText}>
              This determines the number of corners in your land shape.
            </Text>

            <View style={styles.vertexRow}>
              <Pressable
                style={styles.vertexButton}
                onPress={() => {
                  const value = Math.max(3, Number(vertices || 3) - 1);
                  setVertices(String(value));
                }}
              >
                <Ionicons name="remove" size={22} color="#1B5E20" />
              </Pressable>

              <View style={styles.vertexValueBox}>
                <Text style={styles.vertexValue}>{vertices}</Text>
                <Text style={styles.vertexText}>Vertices</Text>
              </View>

              <Pressable
                style={styles.vertexButton}
                onPress={() => {
                  const value = Math.min(12, Number(vertices || 3) + 1);
                  setVertices(String(value));
                }}
              >
                <Ionicons name="add" size={22} color="#1B5E20" />
              </Pressable>
            </View>

            <Text style={styles.rangeText}>
              Minimum 3 • Maximum 12 vertices
            </Text>
          </View>

          {/* AREA */}
          <View style={styles.inputSection}>
            <Text style={styles.label}>Total Land Area</Text>

            <View style={styles.areaRow}>
              <View style={[styles.inputWrapper, styles.areaInput]}>
                <Ionicons
                  name="resize-outline"
                  size={20}
                  color="#78909C"
                  style={styles.inputIcon}
                />

                <TextInput
                  style={styles.input}
                  placeholder="e.g. 2"
                  placeholderTextColor="#A0A8A2"
                  keyboardType="decimal-pad"
                  value={area}
                  onChangeText={setArea}
                />
              </View>

              <Pressable
                style={styles.unitButton}
                onPress={() =>
                  setAreaUnit(areaUnit === 'Acres' ? 'Hectares' : 'Acres')
                }
              >
                <Text style={styles.unitText}>{areaUnit}</Text>

                <Ionicons
                  name="chevron-down"
                  size={18}
                  color="#1B5E20"
                />
              </Pressable>
            </View>
          </View>

          {/* INFORMATION */}
          <View style={styles.infoCard}>
            <Ionicons
              name="information-circle-outline"
              size={22}
              color="#1565C0"
            />

            <Text style={styles.infoText}>
              In the next step, you can drag and adjust the vertices to create
              a shape similar to your real agricultural field.
            </Text>
          </View>

          {/* NEXT BUTTON */}
          <Pressable
                style={[
                    styles.nextButton,
                    (!landName.trim() || !area.trim()) &&
                    styles.nextButtonDisabled,
                ]}
                disabled={!landName.trim() || !area.trim()}
                onPress={() =>
                    router.push({
                    pathname: '/calibrate/draw',
                    params: {
                        landName,
                        vertices,
                        area,
                        areaUnit,
                    },
                    })
                }
            >
            <Text style={styles.nextButtonText}>NEXT</Text>

            <Ionicons
              name="arrow-forward"
              size={21}
              color="#FFFFFF"
            />
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8F6',
  },

  keyboardContainer: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 14,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E8EDE8',
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#F1F6F1',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#183A1D',
  },

  headerSubtitle: {
    fontSize: 12,
    color: '#78909C',
    marginTop: 2,
  },

  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },

  introCard: {
    backgroundColor: '#EAF5EA',
    borderRadius: 20,
    padding: 22,
    alignItems: 'center',
    marginBottom: 24,
  },

  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  introTitle: {
    fontSize: 21,
    fontWeight: '800',
    color: '#183A1D',
    marginBottom: 8,
  },

  introText: {
    fontSize: 14,
    color: '#607066',
    textAlign: 'center',
    lineHeight: 21,
  },

  inputSection: {
    marginBottom: 24,
  },

  label: {
    fontSize: 15,
    fontWeight: '700',
    color: '#26352A',
    marginBottom: 9,
  },

  helperText: {
    fontSize: 12,
    color: '#78909C',
    marginBottom: 12,
    lineHeight: 18,
  },

  inputWrapper: {
    height: 56,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#DDE5DD',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  inputIcon: {
    marginRight: 10,
  },

  input: {
    flex: 1,
    fontSize: 15,
    color: '#26352A',
  },

  vertexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },

  vertexButton: {
    width: 52,
    height: 52,
    borderRadius: 14,
    backgroundColor: '#EAF5EA',
    alignItems: 'center',
    justifyContent: 'center',
  },

  vertexValueBox: {
    width: 110,
    height: 70,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDE5DD',
    alignItems: 'center',
    justifyContent: 'center',
  },

  vertexValue: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1B5E20',
  },

  vertexText: {
    fontSize: 11,
    color: '#78909C',
    marginTop: 2,
  },

  rangeText: {
    textAlign: 'center',
    fontSize: 11,
    color: '#90A4AE',
    marginTop: 10,
  },

  areaRow: {
    flexDirection: 'row',
    gap: 10,
  },

  areaInput: {
    flex: 1,
  },

  unitButton: {
    width: 120,
    height: 56,
    borderRadius: 14,
    backgroundColor: '#EAF5EA',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },

  unitText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1B5E20',
  },

  infoCard: {
    flexDirection: 'row',
    backgroundColor: '#EAF3FA',
    borderRadius: 15,
    padding: 15,
    gap: 10,
    marginBottom: 25,
  },

  infoText: {
    flex: 1,
    fontSize: 12,
    color: '#45606F',
    lineHeight: 18,
  },

  nextButton: {
    height: 58,
    backgroundColor: '#1B5E20',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
  },

  nextButtonDisabled: {
    backgroundColor: '#A8B8AA',
  },

  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
});