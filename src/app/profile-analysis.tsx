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

export default function ProfileAnalysisScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const crop = params.crop || 'Tomato';
  const land = params.land || 'North Field';
  const probability = params.probability || '82%';
  const lastAnalysis = params.lastAnalysis || 'Today';

  const nodeRecommendations = [
    {
      node: 'Node 1',
      recommendation: 'Add Nitrogen',
      status: 'Needs Attention',
      color: '#EF6C00',
    },
    {
      node: 'Node 2',
      recommendation: 'Add Phosphorus',
      status: 'Needs Attention',
      color: '#1565C0',
    },
    {
      node: 'Node 3',
      recommendation: 'No Fertilizer Required',
      status: 'Optimal',
      color: '#2E7D32',
    },
    {
      node: 'Node 4',
      recommendation: 'Add Potassium',
      status: 'Needs Attention',
      color: '#7B1FA2',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}

      <View style={styles.header}>
        <TouchableOpacity
            style={styles.backButton}
            onPress={() =>
                router.push({
                pathname: '/land-analyses',
                params: {
                    landName: land,
                },
                })
            }
            >
            <Ionicons
                name="arrow-back"
                size={24}
                color="#1B5E20"
            />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Analysis Result
        </Text>

        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* CROP HEADER */}

        <View style={styles.cropHeader}>
          <View style={styles.cropIcon}>
            <Ionicons
              name="leaf-outline"
              size={32}
              color="#2E7D32"
            />
          </View>

          <View>
            <Text style={styles.cropTitle}>
              {crop}
            </Text>

            <Text style={styles.landText}>
              {land}
            </Text>

            <Text style={styles.lastAnalysisText}>
              Last Analysis: {lastAnalysis}
            </Text>
          </View>
        </View>

        {/* SUCCESS PROBABILITY */}

        <View style={styles.probabilityCard}>
          <Text style={styles.cardLabel}>
            FARMING SUCCESS PROBABILITY
          </Text>

          <Text style={styles.probabilityNumber}>
            {probability}
          </Text>

          <View style={styles.progressBackground}>
            <View
              style={[
                styles.progressFill,
                {
                  width: probability,
                },
              ]}
            />
          </View>

          <Text style={styles.probabilityDescription}>
            Based on soil conditions, node data, crop requirements
            and environmental conditions.
          </Text>
        </View>

        {/* FERTILIZER RECOMMENDATION */}

        <Text style={styles.sectionTitle}>
          Recommended Fertilizers
        </Text>

        <View style={styles.fertilizerContainer}>
          <View style={styles.fertilizerCard}>
            <Ionicons
              name="flask-outline"
              size={24}
              color="#2E7D32"
            />

            <Text style={styles.fertilizerName}>
              Urea
            </Text>

            <Text style={styles.fertilizerDetail}>
              Nitrogen
            </Text>
          </View>

          <View style={styles.fertilizerCard}>
            <Ionicons
              name="flask-outline"
              size={24}
              color="#1565C0"
            />

            <Text style={styles.fertilizerName}>
              DAP
            </Text>

            <Text style={styles.fertilizerDetail}>
              Phosphorus
            </Text>
          </View>

          <View style={styles.fertilizerCard}>
            <Ionicons
              name="flask-outline"
              size={24}
              color="#EF6C00"
            />

            <Text style={styles.fertilizerName}>
              MOP
            </Text>

            <Text style={styles.fertilizerDetail}>
              Potassium
            </Text>
          </View>
        </View>

        {/* NODE-WISE ANALYSIS */}

        <Text style={styles.sectionTitle}>
          Node-Wise Recommendations
        </Text>

        {nodeRecommendations.map((item) => (
          <View
            key={item.node}
            style={styles.nodeCard}
          >
            <View
              style={[
                styles.nodeNumber,
                { backgroundColor: `${item.color}18` },
              ]}
            >
              <Text
                style={[
                  styles.nodeNumberText,
                  { color: item.color },
                ]}
              >
                {item.node.replace('Node ', 'N')}
              </Text>
            </View>

            <View style={styles.nodeInfo}>
              <Text style={styles.nodeTitle}>
                {item.node}
              </Text>

              <Text style={styles.nodeRecommendation}>
                {item.recommendation}
              </Text>
            </View>

            <View
              style={[
                styles.statusBadge,
                { backgroundColor: `${item.color}18` },
              ]}
            >
              <Text
                style={[
                  styles.statusText,
                  { color: item.color },
                ]}
              >
                {item.status}
              </Text>
            </View>
          </View>
        ))}

        {/* WEATHER CONDITIONS */}

        <Text style={styles.sectionTitle}>
          Weather Conditions
        </Text>

        <View style={styles.conditionsGrid}>
          <View style={styles.conditionCard}>
            <Ionicons
              name="thermometer-outline"
              size={25}
              color="#EF6C00"
            />

            <Text style={styles.conditionLabel}>
              Temperature
            </Text>

            <Text style={styles.conditionValue}>
              28°C
            </Text>
          </View>

          <View style={styles.conditionCard}>
            <Ionicons
              name="water-outline"
              size={25}
              color="#1565C0"
            />

            <Text style={styles.conditionLabel}>
              Humidity
            </Text>

            <Text style={styles.conditionValue}>
              72%
            </Text>
          </View>
        </View>

        {/* SOIL CONDITIONS */}

        <Text style={styles.sectionTitle}>
          Soil Conditions
        </Text>

        <View style={styles.soilCard}>
          <View style={styles.soilRow}>
            <Text style={styles.soilLabel}>pH</Text>
            <Text style={styles.soilValue}>6.4</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.soilRow}>
            <Text style={styles.soilLabel}>Nitrogen</Text>
            <Text style={[styles.soilValue, { color: '#EF6C00' }]}>
              Low
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.soilRow}>
            <Text style={styles.soilLabel}>Phosphorus</Text>
            <Text style={[styles.soilValue, { color: '#2E7D32' }]}>
              Normal
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.soilRow}>
            <Text style={styles.soilLabel}>Potassium</Text>
            <Text style={[styles.soilValue, { color: '#1565C0' }]}>
              High
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.soilRow}>
            <Text style={styles.soilLabel}>Moisture</Text>
            <Text style={styles.soilValue}>42%</Text>
          </View>
        </View>

        {/* SAVED INFO */}

        <View style={styles.savedInfo}>
          <Ionicons
            name="checkmark-circle"
            size={22}
            color="#2E7D32"
          />

          <Text style={styles.savedText}>
            This is a previously saved analysis. No new ML processing
            has been performed.
          </Text>
        </View>
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
    fontSize: 19,
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

  cropHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },

  cropIcon: {
    width: 65,
    height: 65,
    borderRadius: 18,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  cropTitle: {
    fontSize: 25,
    fontWeight: '800',
    color: '#263238',
  },

  landText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2E7D32',
    marginTop: 3,
  },

  lastAnalysisText: {
    fontSize: 12,
    color: '#90A4AE',
    marginTop: 4,
  },

  probabilityCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 22,
    marginBottom: 28,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5ECE5',
  },

  cardLabel: {
    fontSize: 11,
    fontWeight: '800',
    color: '#78909C',
    letterSpacing: 1,
  },

  probabilityNumber: {
    fontSize: 48,
    fontWeight: '900',
    color: '#2E7D32',
    marginVertical: 10,
  },

  progressBackground: {
    width: '100%',
    height: 10,
    backgroundColor: '#E8F0E8',
    borderRadius: 10,
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    backgroundColor: '#2E7D32',
    borderRadius: 10,
  },

  probabilityDescription: {
    textAlign: 'center',
    fontSize: 11,
    color: '#78909C',
    lineHeight: 17,
    marginTop: 13,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: '#263238',
    marginBottom: 14,
    marginTop: 4,
  },

  fertilizerContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 28,
  },

  fertilizerCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5ECE5',
  },

  fertilizerName: {
    fontSize: 15,
    fontWeight: '800',
    color: '#263238',
    marginTop: 8,
  },

  fertilizerDetail: {
    fontSize: 10,
    color: '#90A4AE',
    marginTop: 3,
  },

  nodeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E5ECE5',
  },

  nodeNumber: {
    width: 43,
    height: 43,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  nodeNumberText: {
    fontSize: 15,
    fontWeight: '800',
  },

  nodeInfo: {
    flex: 1,
  },

  nodeTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#263238',
  },

  nodeRecommendation: {
    fontSize: 11,
    color: '#607066',
    marginTop: 3,
  },

  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 10,
  },

  statusText: {
    fontSize: 9,
    fontWeight: '700',
  },

  conditionsGrid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 28,
  },

  conditionCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5ECE5',
  },

  conditionLabel: {
    fontSize: 11,
    color: '#78909C',
    marginTop: 8,
  },

  conditionValue: {
    fontSize: 20,
    fontWeight: '800',
    color: '#263238',
    marginTop: 4,
  },

  soilCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    paddingHorizontal: 17,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#E5ECE5',
  },

  soilRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },

  soilLabel: {
    fontSize: 14,
    color: '#607066',
  },

  soilValue: {
    fontSize: 14,
    fontWeight: '800',
    color: '#263238',
  },

  divider: {
    height: 1,
    backgroundColor: '#EEF2EE',
  },

  savedInfo: {
    flexDirection: 'row',
    backgroundColor: '#E8F5E9',
    borderRadius: 15,
    padding: 16,
    alignItems: 'flex-start',
    gap: 10,
  },

  savedText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 18,
    color: '#456047',
  },
});