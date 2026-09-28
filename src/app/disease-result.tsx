import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function DiseaseResultScreen() {
  const router = useRouter();

  const { landName, nodeNumber } = useLocalSearchParams<{
    landName: string;
    nodeNumber: string;
  }>();

  // Prototype disease analysis result.
  // Later this data will come from the backend/database.
  const disease = 'Early Blight';
  const probability = 87;
  const severity = 'Moderate';

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.replace('/disease')}
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color="#1B5E20"
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Disease Analysis
        </Text>

        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* NODE INFORMATION */}

        <View style={styles.locationCard}>
          <View style={styles.locationIcon}>
            <Ionicons
              name="location"
              size={24}
              color="#2E7D32"
            />
          </View>

          <View>
            <Text style={styles.landName}>
              {landName || 'Selected Land'}
            </Text>

            <Text style={styles.nodeText}>
              Node {nodeNumber || '1'}
            </Text>
          </View>
        </View>

        {/* RESULT ICON */}

        <View style={styles.resultHero}>
          <View style={styles.leafIcon}>
            <Ionicons
              name="leaf"
              size={52}
              color="#FFFFFF"
            />
          </View>

          <Text style={styles.analysisTitle}>
            Plant Disease Analysis
          </Text>

          <Text style={styles.analysisSubtitle}>
            AI-powered analysis completed successfully
          </Text>
        </View>

        {/* DISEASE CARD */}

        <View style={styles.diseaseCard}>
          <Text style={styles.sectionLabel}>
            DISEASE DETECTED
          </Text>

          <Text style={styles.diseaseName}>
            {disease}
          </Text>

          <View style={styles.divider} />

          <View style={styles.metricsRow}>
            <View style={styles.metricBox}>
              <Text style={styles.metricLabel}>
                PROBABILITY
              </Text>

              <Text style={styles.probabilityValue}>
                {probability}%
              </Text>

              <View style={styles.progressBackground}>
                <View
                  style={[
                    styles.progressFill,
                    { width: `${probability}%` },
                  ]}
                />
              </View>
            </View>

            <View style={styles.metricBox}>
              <Text style={styles.metricLabel}>
                SEVERITY
              </Text>

              <View style={styles.severityBadge}>
                <Ionicons
                  name="alert-circle"
                  size={18}
                  color="#E67E22"
                />

                <Text style={styles.severityText}>
                  {severity}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* RECOMMENDED ACTION */}

        <View style={styles.recommendationCard}>
          <View style={styles.recommendationHeader}>
            <Ionicons
              name="medical-outline"
              size={23}
              color="#1565C0"
            />

            <Text style={styles.recommendationTitle}>
              Recommended Action
            </Text>
          </View>

          <View style={styles.actionItem}>
            <Ionicons
              name="checkmark-circle"
              size={18}
              color="#2E7D32"
            />

            <Text style={styles.actionText}>
              Remove severely affected leaves.
            </Text>
          </View>

          <View style={styles.actionItem}>
            <Ionicons
              name="checkmark-circle"
              size={18}
              color="#2E7D32"
            />

            <Text style={styles.actionText}>
              Monitor nearby plants for similar symptoms.
            </Text>
          </View>

          <View style={styles.actionItem}>
            <Ionicons
              name="checkmark-circle"
              size={18}
              color="#2E7D32"
            />

            <Text style={styles.actionText}>
              Apply a suitable fungicide if symptoms increase.
            </Text>
          </View>
        </View>

        {/* DATA SOURCE */}

        <View style={styles.infoBox}>
          <Ionicons
            name="server-outline"
            size={21}
            color="#607D8B"
          />

          <Text style={styles.infoText}>
            Analysis result stored successfully under{' '}
            {landName || 'this land'} → Node {nodeNumber || '1'}.
          </Text>
        </View>

        {/* VIEW LAND SUMMARY */}

        <TouchableOpacity
          style={styles.summaryButton}
          onPress={() =>
            router.push({
              pathname: '/disease-summary',
              params: {
                landName,
              },
            })
          }
        >
          <Ionicons
            name="grid-outline"
            size={21}
            color="#FFFFFF"
          />

          <Text style={styles.summaryButtonText}>
            VIEW ALL NODE RESULTS
          </Text>
        </TouchableOpacity>
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
    height: 65,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#E5ECE5',
  },

  backButton: {
    width: 40,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1B5E20',
  },

  headerPlaceholder: {
    width: 40,
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  locationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2EAE2',
    marginBottom: 24,
  },

  locationIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  landName: {
    fontSize: 16,
    fontWeight: '800',
    color: '#263238',
  },

  nodeText: {
    fontSize: 13,
    color: '#78909C',
    marginTop: 4,
  },

  resultHero: {
    alignItems: 'center',
    marginBottom: 25,
  },

  leafIcon: {
    width: 92,
    height: 92,
    borderRadius: 30,
    backgroundColor: '#2E7D32',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },

  analysisTitle: {
    fontSize: 23,
    fontWeight: '800',
    color: '#263238',
  },

  analysisSubtitle: {
    fontSize: 12,
    color: '#78909C',
    marginTop: 7,
  },

  diseaseCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E3EAE3',
    marginBottom: 18,
  },

  sectionLabel: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
    color: '#78909C',
  },

  diseaseName: {
    fontSize: 28,
    fontWeight: '800',
    color: '#C62828',
    marginTop: 7,
  },

  divider: {
    height: 1,
    backgroundColor: '#EEF1EE',
    marginVertical: 20,
  },

  metricsRow: {
    flexDirection: 'row',
    gap: 15,
  },

  metricBox: {
    flex: 1,
  },

  metricLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#90A4AE',
  },

  probabilityValue: {
    fontSize: 25,
    fontWeight: '800',
    color: '#263238',
    marginTop: 7,
  },

  progressBackground: {
    height: 7,
    backgroundColor: '#ECEFF1',
    borderRadius: 10,
    marginTop: 9,
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    backgroundColor: '#2E7D32',
    borderRadius: 10,
  },

  severityBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 12,
    backgroundColor: '#FFF3E0',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 10,
  },

  severityText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#E67E22',
  },

  recommendationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E3EAE3',
    marginBottom: 18,
  },

  recommendationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    marginBottom: 16,
  },

  recommendationTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#263238',
  },

  actionItem: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 13,
  },

  actionText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 18,
    color: '#526B7A',
  },

  infoBox: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#F1F5F6',
    padding: 15,
    borderRadius: 15,
    marginBottom: 22,
  },

  infoText: {
    flex: 1,
    fontSize: 11,
    lineHeight: 17,
    color: '#607D8B',
  },

  summaryButton: {
    minHeight: 56,
    borderRadius: 16,
    backgroundColor: '#1B5E20',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 9,
  },

  summaryButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
  },
});