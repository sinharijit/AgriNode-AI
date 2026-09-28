import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function IrrigationScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.replace('/analyze')}
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color="#1565C0"
          />
        </TouchableOpacity>

        <View>
          <Text style={styles.title}>Smart Irrigation</Text>
          <Text style={styles.subtitle}>
            AI-powered irrigation recommendations
          </Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* CURRENT FARM */}
        <View style={styles.farmCard}>
          <View style={styles.farmIcon}>
            <Ionicons
              name="location-outline"
              size={24}
              color="#FFFFFF"
            />
          </View>

          <View style={styles.farmInfo}>
            <Text style={styles.farmLabel}>SELECTED LAND</Text>
            <Text style={styles.farmName}>North Field</Text>
            <Text style={styles.cropInfo}>Rice • 2.5 Acres</Text>
          </View>

          <Ionicons
            name="chevron-down"
            size={20}
            color="#78909C"
          />
        </View>

        {/* AI MODEL INFO */}
        <View style={styles.aiInfoCard}>
          <View style={styles.aiIcon}>
            <Ionicons
              name="water-outline"
              size={23}
              color="#FFFFFF"
            />
          </View>

          <View style={styles.aiTextContainer}>
            <Text style={styles.aiTitle}>
              AI Irrigation Advisor
            </Text>

            <Text style={styles.aiDescription}>
              The model analyzes soil and environmental conditions to recommend the optimal irrigation action.
            </Text>
          </View>
        </View>

        {/* CURRENT CONDITIONS */}
        <Text style={styles.sectionTitle}>
          Current Farm Conditions
        </Text>

        <View style={styles.conditionsGrid}>

          {/* SOIL MOISTURE */}
          <View style={styles.conditionCard}>
            <Ionicons
              name="water-outline"
              size={26}
              color="#1565C0"
            />

            <Text style={styles.conditionValue}>24%</Text>

            <Text style={styles.conditionLabel}>
              Soil Moisture
            </Text>
          </View>

          {/* TEMPERATURE */}
          <View style={styles.conditionCard}>
            <Ionicons
              name="thermometer-outline"
              size={26}
              color="#EF6C00"
            />

            <Text style={styles.conditionValue}>34°C</Text>

            <Text style={styles.conditionLabel}>
              Temperature
            </Text>
          </View>

          {/* HUMIDITY */}
          <View style={styles.conditionCard}>
            <Ionicons
              name="cloud-outline"
              size={26}
              color="#607D8B"
            />

            <Text style={styles.conditionValue}>58%</Text>

            <Text style={styles.conditionLabel}>
              Humidity
            </Text>
          </View>

          {/* RAINFALL */}
          <View style={styles.conditionCard}>
            <Ionicons
              name="rainy-outline"
              size={26}
              color="#0288D1"
            />

            <Text style={styles.conditionValue}>0 mm</Text>

            <Text style={styles.conditionLabel}>
              Rainfall (24h)
            </Text>
          </View>

        </View>

        {/* ANALYZE BUTTON */}
        <TouchableOpacity style={styles.analyzeButton}>
          <Ionicons
            name="sparkles-outline"
            size={22}
            color="#FFFFFF"
          />

          <Text style={styles.analyzeButtonText}>
            Get AI Recommendation
          </Text>
        </TouchableOpacity>

        {/* AI RESULT */}
        <Text style={styles.sectionTitle}>
          AI Recommendation
        </Text>

        <View style={styles.resultCard}>

          <View style={styles.resultTop}>
            <View style={styles.resultIcon}>
              <Ionicons
                name="water"
                size={30}
                color="#1565C0"
              />
            </View>

            <View style={styles.resultHeaderText}>
              <Text style={styles.resultLabel}>
                RECOMMENDED ACTION
              </Text>

              <Text style={styles.resultTitle}>
                Irrigate Now
              </Text>
            </View>

            <View style={styles.actionBadge}>
              <Text style={styles.actionBadgeText}>
                HIGH PRIORITY
              </Text>
            </View>
          </View>

          <View style={styles.divider} />

          {/* WATER AMOUNT */}
          <View style={styles.waterAmountContainer}>
            <Text style={styles.waterAmountLabel}>
              ESTIMATED WATER REQUIREMENT
            </Text>

            <Text style={styles.waterAmount}>
              1,200 L
            </Text>

            <Text style={styles.waterAmountSub}>
              Recommended for the next irrigation cycle
            </Text>
          </View>

          {/* REASON */}
          <View style={styles.reasonBox}>
            <Ionicons
              name="information-circle-outline"
              size={23}
              color="#1565C0"
            />

            <View style={styles.reasonContent}>
              <Text style={styles.reasonTitle}>
                Why this recommendation?
              </Text>

              <Text style={styles.reasonText}>
                Soil moisture is below the optimal threshold while the current temperature is elevated. No significant rainfall has been recorded recently.
              </Text>
            </View>
          </View>

          {/* FACTORS */}
          <Text style={styles.factorTitle}>
            KEY DECISION FACTORS
          </Text>

          <View style={styles.factorRow}>
            <Text style={styles.factorName}>Low soil moisture</Text>

            <View style={styles.negativeTag}>
              <Text style={styles.negativeText}>Critical</Text>
            </View>
          </View>

          <View style={styles.factorRow}>
            <Text style={styles.factorName}>High temperature</Text>

            <View style={styles.warningTag}>
              <Text style={styles.warningText}>Moderate</Text>
            </View>
          </View>

          <View style={styles.factorRow}>
            <Text style={styles.factorName}>Recent rainfall</Text>

            <View style={styles.negativeTag}>
              <Text style={styles.negativeText}>None</Text>
            </View>
          </View>

        </View>

        <View style={{ height: 30 }} />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F7FAF7',
  },

  header: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E8EDE8',
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  title: {
    fontSize: 21,
    fontWeight: '800',
    color: '#263238',
  },

  subtitle: {
    fontSize: 12,
    color: '#78909C',
    marginTop: 3,
  },

  scrollContent: {
    padding: 20,
  },

  farmCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8EDE8',
  },

  farmIcon: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: '#2E7D32',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  farmInfo: {
    flex: 1,
  },

  farmLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#90A4AE',
    letterSpacing: 0.8,
  },

  farmName: {
    fontSize: 16,
    fontWeight: '800',
    color: '#263238',
    marginTop: 2,
  },

  cropInfo: {
    fontSize: 11,
    color: '#78909C',
    marginTop: 2,
  },

  aiInfoCard: {
    backgroundColor: '#E3F2FD',
    borderRadius: 18,
    padding: 16,
    flexDirection: 'row',
    marginTop: 18,
  },

  aiIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: '#1565C0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  aiTextContainer: {
    flex: 1,
  },

  aiTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#1565C0',
  },

  aiDescription: {
    fontSize: 11,
    color: '#546E7A',
    lineHeight: 17,
    marginTop: 4,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#263238',
    marginTop: 25,
    marginBottom: 14,
  },

  conditionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },

  conditionCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: '#E8EDE8',
  },

  conditionValue: {
    fontSize: 22,
    fontWeight: '800',
    color: '#263238',
    marginTop: 10,
  },

  conditionLabel: {
    fontSize: 11,
    color: '#78909C',
    marginTop: 4,
  },

  analyzeButton: {
    height: 56,
    backgroundColor: '#1565C0',
    borderRadius: 16,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
  },

  analyzeButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
  },

  resultCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 18,
    borderWidth: 1,
    borderColor: '#E8EDE8',
  },

  resultTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  resultIcon: {
    width: 54,
    height: 54,
    borderRadius: 17,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
  },

  resultHeaderText: {
    flex: 1,
    marginLeft: 12,
  },

  resultLabel: {
    fontSize: 9,
    fontWeight: '700',
    color: '#90A4AE',
    letterSpacing: 0.7,
  },

  resultTitle: {
    fontSize: 21,
    fontWeight: '800',
    color: '#1565C0',
    marginTop: 4,
  },

  actionBadge: {
    backgroundColor: '#FFEBEE',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 7,
  },

  actionBadgeText: {
    fontSize: 8,
    fontWeight: '800',
    color: '#D32F2F',
  },

  divider: {
    height: 1,
    backgroundColor: '#EEF1EE',
    marginVertical: 18,
  },

  waterAmountContainer: {
    alignItems: 'center',
  },

  waterAmountLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#90A4AE',
    letterSpacing: 0.8,
  },

  waterAmount: {
    fontSize: 34,
    fontWeight: '800',
    color: '#1565C0',
    marginTop: 7,
  },

  waterAmountSub: {
    fontSize: 11,
    color: '#78909C',
    marginTop: 2,
  },

  reasonBox: {
    flexDirection: 'row',
    backgroundColor: '#F1F8FE',
    padding: 14,
    borderRadius: 15,
    marginTop: 22,
  },

  reasonContent: {
    flex: 1,
    marginLeft: 10,
  },

  reasonTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#1565C0',
  },

  reasonText: {
    fontSize: 11,
    color: '#546E7A',
    lineHeight: 17,
    marginTop: 4,
  },

  factorTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: '#90A4AE',
    marginTop: 22,
    marginBottom: 10,
    letterSpacing: 0.7,
  },

  factorRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F2F0',
  },

  factorName: {
    fontSize: 12,
    color: '#455A64',
  },

  negativeTag: {
    backgroundColor: '#FFEBEE',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 7,
  },

  negativeText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#D32F2F',
  },

  warningTag: {
    backgroundColor: '#FFF3E0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 7,
  },

  warningText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#EF6C00',
  },

});