import { SafeAreaView } from 'react-native-safe-area-context';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function CalibrationScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* HEADER */}

        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color="#1B5E20" />
          </TouchableOpacity>

          <View>
            <Text style={styles.title}>Calibrate Your Land</Text>
            <Text style={styles.subtitle}>
              Help us understand your field
            </Text>
          </View>
        </View>

        {/* PROGRESS */}

        <View style={styles.progressContainer}>
          <View style={styles.progressActive} />
          <View style={styles.progressInactive} />
          <View style={styles.progressInactive} />
        </View>

        <Text style={styles.stepText}>
          STEP 1 OF 3
        </Text>

        {/* MAIN CARD */}

        <View style={styles.infoCard}>
          <View style={styles.iconContainer}>
            <Ionicons
              name="information-circle-outline"
              size={40}
              color="#1B5E20"
            />
          </View>

          <Text style={styles.cardTitle}>
            Calibration Instructions
          </Text>

          <Text style={styles.cardDescription}>
            Follow these steps to collect initial soil samples across
            your land.
          </Text>
        </View>

        {/* INSTRUCTIONS */}

        <View style={styles.instructionsContainer}>

          <Instruction
            number="1"
            text="Go to any location in your field."
          />

          <Instruction
            number="2"
            text="Insert the hardware probe into the soil."
          />

          <Instruction
            number="3"
            text="Take the first sample."
          />

          <Instruction
            number="4"
            text="Move approximately 10 meters from the previous location."
          />

          <Instruction
            number="5"
            text="Take another sample."
          />

          <Instruction
            number="6"
            text="Repeat this process for 10–15 locations across the entire land."
          />

        </View>

        {/* IMPORTANT NOTE */}

        <View style={styles.noteCard}>
          <Ionicons
            name="bulb-outline"
            size={24}
            color="#F9A825"
          />

          <Text style={styles.noteText}>
            This initial calibration helps the system understand how
            soil properties vary across your entire field.
          </Text>
        </View>

        {/* START BUTTON */}

        <TouchableOpacity
          style={styles.startButton}
          onPress={() =>
            router.push('/calibrate/sampling')
          }
        >
          <Ionicons
            name="flask-outline"
            size={22}
            color="#FFFFFF"
          />

          <Text style={styles.startButtonText}>
            START CALIBRATION
          </Text>

          <Ionicons
            name="arrow-forward"
            size={22}
            color="#FFFFFF"
          />
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}


function Instruction({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <View style={styles.instructionRow}>

      <View style={styles.numberCircle}>
        <Text style={styles.numberText}>
          {number}
        </Text>
      </View>

      <Text style={styles.instructionText}>
        {text}
      </Text>

    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F7FAF7',
  },

  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },

  backButton: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
    elevation: 2,
  },

  title: {
    fontSize: 25,
    fontWeight: '800',
    color: '#1B1F1B',
  },

  subtitle: {
    fontSize: 13,
    color: '#78909C',
    marginTop: 3,
  },

  progressContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 10,
  },

  progressActive: {
    flex: 1,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#1B5E20',
  },

  progressInactive: {
    flex: 1,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#DDE5DD',
  },

  stepText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#1B5E20',
    letterSpacing: 1,
    marginBottom: 22,
  },

  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 22,
    alignItems: 'center',
    marginBottom: 22,
    elevation: 2,
  },

  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  cardTitle: {
    fontSize: 21,
    fontWeight: '800',
    color: '#263238',
    marginBottom: 8,
  },

  cardDescription: {
    fontSize: 14,
    color: '#607D8B',
    textAlign: 'center',
    lineHeight: 21,
  },

  instructionsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    elevation: 2,
  },

  instructionRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },

  numberCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  numberText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#1B5E20',
  },

  instructionText: {
    flex: 1,
    fontSize: 15,
    color: '#37474F',
    lineHeight: 22,
    paddingTop: 3,
  },

  noteCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF8E1',
    borderRadius: 18,
    padding: 17,
    marginBottom: 25,
    gap: 12,
  },

  noteText: {
    flex: 1,
    fontSize: 13,
    lineHeight: 20,
    color: '#6D5A00',
  },

  startButton: {
    height: 58,
    backgroundColor: '#1B5E20',
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    elevation: 3,
  },

  startButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 0.5,
  },

});
