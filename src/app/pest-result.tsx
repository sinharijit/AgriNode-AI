import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function PestResultScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const landName = String(params.landName || 'Selected Land');
  const nodeNumber = String(params.nodeNumber || '1');

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.replace('/pest-node')}
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color="#D97706"
          />
        </TouchableOpacity>

        <View>
          <Text style={styles.title}>Pest Detection Result</Text>
          <Text style={styles.subtitle}>
            AI analysis for selected node
          </Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* LOCATION */}
        <View style={styles.locationCard}>
          <View style={styles.locationIcon}>
            <Ionicons
              name="location"
              size={25}
              color="#EF6C00"
            />
          </View>

          <View style={styles.locationInfo}>
            <Text style={styles.locationLabel}>
              ANALYZED LOCATION
            </Text>

            <Text style={styles.landName}>
              {landName}
            </Text>

            <Text style={styles.nodeName}>
              Node N{nodeNumber}
            </Text>
          </View>

          <View style={styles.completedBadge}>
            <Ionicons
              name="checkmark-circle"
              size={18}
              color="#2E7D32"
            />

            <Text style={styles.completedText}>
              COMPLETE
            </Text>
          </View>
        </View>

        {/* MAIN RESULT */}
        <View style={styles.resultCard}>
          <View style={styles.resultIcon}>
            <Ionicons
              name="bug"
              size={38}
              color="#EF6C00"
            />
          </View>

          <Text style={styles.resultLabel}>
            DETECTED PEST
          </Text>

          <Text style={styles.pestName}>
            Brown Planthopper
          </Text>

          <Text style={styles.scientificName}>
            Nilaparvata lugens
          </Text>

          <View style={styles.confidenceBox}>
            <View>
              <Text style={styles.confidenceLabel}>
                Detection Confidence
              </Text>

              <Text style={styles.confidenceValue}>
                92.6%
              </Text>
            </View>

            <View style={styles.confidenceIcon}>
              <Ionicons
                name="analytics-outline"
                size={25}
                color="#EF6C00"
              />
            </View>
          </View>

          <View style={styles.progressBackground}>
            <View style={styles.progressFill} />
          </View>
        </View>

        {/* STATUS */}
        <View style={styles.statusRow}>
          <View style={styles.statusCard}>
            <View style={styles.statusIcon}>
              <Ionicons
                name="pulse-outline"
                size={23}
                color="#D84315"
              />
            </View>

            <Text style={styles.statusLabel}>
              Activity
            </Text>

            <Text style={styles.statusValue}>
              High
            </Text>
          </View>

          <View style={styles.statusCard}>
            <View style={styles.statusIcon}>
              <Ionicons
                name="warning-outline"
                size={23}
                color="#D84315"
              />
            </View>

            <Text style={styles.statusLabel}>
              Risk Level
            </Text>

            <Text style={styles.statusValue}>
              High
            </Text>
          </View>

          <View style={styles.statusCard}>
            <View style={styles.statusIcon}>
              <Ionicons
                name="leaf-outline"
                size={23}
                color="#D84315"
              />
            </View>

            <Text style={styles.statusLabel}>
              Crop Impact
            </Text>

            <Text style={styles.statusValue}>
              Moderate
            </Text>
          </View>
        </View>

        {/* OBSERVATION */}
        <Text style={styles.sectionTitle}>
          AI Observation
        </Text>

        <View style={styles.observationCard}>
          <View style={styles.observationIcon}>
            <Ionicons
              name="scan-outline"
              size={23}
              color="#7B1FA2"
            />
          </View>

          <Text style={styles.observationText}>
            The AI model detected visual patterns consistent with
            Brown Planthopper activity in the captured images from
            Node N{nodeNumber}. Multiple camera views were used to
            improve detection confidence.
          </Text>
        </View>

        {/* RECOMMENDATION */}
        <Text style={styles.sectionTitle}>
          Recommended Action
        </Text>

        <View style={styles.recommendationCard}>
          <View style={styles.recommendationIcon}>
            <Ionicons
              name="shield-checkmark-outline"
              size={25}
              color="#2E7D32"
            />
          </View>

          <View style={styles.recommendationContent}>
            <Text style={styles.recommendationTitle}>
              Inspect the affected area
            </Text>

            <Text style={styles.recommendationText}>
              Inspect nearby plants and monitor pest activity
              across surrounding nodes. Follow appropriate
              integrated pest management practices and consult
              local agricultural guidance before applying treatment.
            </Text>
          </View>
        </View>

        {/* DATA FLOW */}
        <View style={styles.dataCard}>
          <Text style={styles.dataTitle}>
            Analysis Data
          </Text>

          <View style={styles.dataRow}>
            <Text style={styles.dataLabel}>
              Images captured
            </Text>

            <Text style={styles.dataValue}>
              5 views
            </Text>
          </View>

          <View style={styles.dataRow}>
            <Text style={styles.dataLabel}>
              AI model
            </Text>

            <Text style={styles.dataValue}>
              Pest Detection
            </Text>
          </View>

          <View style={styles.dataRow}>
            <Text style={styles.dataLabel}>
              Result stored
            </Text>

            <View style={styles.storedBadge}>
              <Ionicons
                name="checkmark-circle"
                size={14}
                color="#2E7D32"
              />
              <Text style={styles.storedText}>
                Database
              </Text>
            </View>
          </View>
        </View>

        {/* SUMMARY BUTTON */}
        <TouchableOpacity
          style={styles.summaryButton}
          activeOpacity={0.85}
          onPress={() =>
            router.push({
              pathname: '/pest-summary',
              params: {
                landName,
              },
            })
          }
        >
          <Ionicons
            name="grid-outline"
            size={22}
            color="#FFFFFF"
          />

          <Text style={styles.summaryButtonText}>
            VIEW ALL NODE RESULTS
          </Text>

          <Ionicons
            name="arrow-forward"
            size={19}
            color="#FFFFFF"
          />
        </TouchableOpacity>

        <View style={{ height: 35 }} />
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
    backgroundColor: '#FFF7ED',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  title: {
    fontSize: 20,
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

  locationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8EDE8',
  },

  locationIcon: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#FFF3E0',
    justifyContent: 'center',
    alignItems: 'center',
  },

  locationInfo: {
    flex: 1,
    marginLeft: 12,
  },

  locationLabel: {
    fontSize: 9,
    fontWeight: '800',
    color: '#90A4AE',
    letterSpacing: 0.6,
  },

  landName: {
    fontSize: 16,
    fontWeight: '800',
    color: '#263238',
    marginTop: 3,
  },

  nodeName: {
    fontSize: 12,
    fontWeight: '700',
    color: '#EF6C00',
    marginTop: 2,
  },

  completedBadge: {
    alignItems: 'center',
    gap: 2,
  },

  completedText: {
    fontSize: 7,
    fontWeight: '800',
    color: '#2E7D32',
  },

  resultCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 22,
    marginTop: 18,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8EDE8',
  },

  resultIcon: {
    width: 76,
    height: 76,
    borderRadius: 25,
    backgroundColor: '#FFF3E0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },

  resultLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#90A4AE',
    letterSpacing: 1,
  },

  pestName: {
    fontSize: 24,
    fontWeight: '800',
    color: '#D84315',
    marginTop: 5,
    textAlign: 'center',
  },

  scientificName: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#78909C',
    marginTop: 3,
  },

  confidenceBox: {
    width: '100%',
    backgroundColor: '#FFF8E1',
    borderRadius: 15,
    padding: 14,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  confidenceLabel: {
    fontSize: 11,
    color: '#795548',
  },

  confidenceValue: {
    fontSize: 22,
    fontWeight: '800',
    color: '#EF6C00',
    marginTop: 2,
  },

  confidenceIcon: {
    width: 43,
    height: 43,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  progressBackground: {
    width: '100%',
    height: 8,
    borderRadius: 10,
    backgroundColor: '#FFE0B2',
    overflow: 'hidden',
    marginTop: 10,
  },

  progressFill: {
    width: '92.6%',
    height: '100%',
    backgroundColor: '#EF6C00',
    borderRadius: 10,
  },

  statusRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 16,
  },

  statusCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 11,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8EDE8',
  },

  statusIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#FFEBEE',
    justifyContent: 'center',
    alignItems: 'center',
  },

  statusLabel: {
    fontSize: 9,
    color: '#90A4AE',
    marginTop: 7,
  },

  statusValue: {
    fontSize: 11,
    fontWeight: '800',
    color: '#37474F',
    marginTop: 2,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: '#263238',
    marginTop: 25,
    marginBottom: 12,
  },

  observationCard: {
    backgroundColor: '#F3E5F5',
    borderRadius: 18,
    padding: 16,
    flexDirection: 'row',
  },

  observationIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  observationText: {
    flex: 1,
    fontSize: 11,
    color: '#5E4A62',
    lineHeight: 17,
    marginLeft: 11,
  },

  recommendationCard: {
    backgroundColor: '#E8F5E9',
    borderRadius: 18,
    padding: 16,
    flexDirection: 'row',
  },

  recommendationIcon: {
    width: 44,
    height: 44,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  recommendationContent: {
    flex: 1,
    marginLeft: 11,
  },

  recommendationTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#2E7D32',
  },

  recommendationText: {
    fontSize: 11,
    color: '#4E6B52',
    lineHeight: 17,
    marginTop: 4,
  },

  dataCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 17,
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#E8EDE8',
  },

  dataTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#263238',
    marginBottom: 10,
  },

  dataRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 9,
    borderTopWidth: 1,
    borderTopColor: '#F0F2F0',
  },

  dataLabel: {
    fontSize: 11,
    color: '#78909C',
  },

  dataValue: {
    fontSize: 11,
    fontWeight: '700',
    color: '#37474F',
  },

  storedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  storedText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#2E7D32',
  },

  summaryButton: {
    height: 57,
    borderRadius: 16,
    backgroundColor: '#263238',
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
  },

  summaryButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
  },
});