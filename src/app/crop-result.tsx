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

export default function CropResultScreen() {
  const router = useRouter();

  const { land, category, crop } = useLocalSearchParams<{
    land: string;
    category: string;
    crop: string;
  }>();

  // Demo/sample analysis data for internal hackathon
  const successProbability = crop === 'Tomato' ? 82 : 78;

  const nodeRecommendations = [
    {
      node: 'Node 1',
      recommendation: 'Add Nitrogen',
      status: 'Needs Attention',
    },
    {
      node: 'Node 2',
      recommendation: 'Add Phosphorus',
      status: 'Needs Attention',
    },
    {
      node: 'Node 3',
      recommendation: 'No Fertilizer Required',
      status: 'Optimal',
    },
    {
      node: 'Node 4',
      recommendation: 'Add Potassium',
      status: 'Needs Attention',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color="#1B5E20"
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Crop Analysis Result</Text>

        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        {/* SELECTED DETAILS */}

        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>ANALYSIS SUMMARY</Text>

          <View style={styles.summaryRow}>
            <Ionicons
              name="map-outline"
              size={20}
              color="#2E7D32"
            />

            <Text style={styles.summaryText}>
              {land || 'North Field'}
            </Text>
          </View>

          <View style={styles.summaryRow}>
            <Ionicons
              name="leaf-outline"
              size={20}
              color="#2E7D32"
            />

            <Text style={styles.summaryText}>
              {category || 'Vegetables'}
            </Text>
          </View>
        </View>


        {/* CROP RESULT */}

        <View style={styles.resultCard}>

          <Text style={styles.cropName}>
            {crop || 'Tomato'}
          </Text>

          <Text style={styles.resultSubtitle}>
            Farming Success Probability
          </Text>

          <View style={styles.probabilityCircle}>
            <Text style={styles.probabilityNumber}>
              {successProbability}%
            </Text>
          </View>

          <View style={styles.progressBackground}>
            <View
              style={[
                styles.progressFill,
                { width: `${successProbability}%` },
              ]}
            />
          </View>

          <Text style={styles.successText}>
            Good suitability for cultivation
          </Text>

        </View>


        {/* ANALYSIS */}

        <Text style={styles.sectionTitle}>
          Land Condition Analysis
        </Text>

        <View style={styles.conditionCard}>

          <View style={styles.conditionRow}>
            <Text style={styles.conditionName}>pH Level</Text>

            <View style={styles.conditionResult}>
              <Text style={styles.conditionValue}>6.4</Text>

              <Ionicons
                name="checkmark-circle"
                size={20}
                color="#2E7D32"
              />
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.conditionRow}>
            <Text style={styles.conditionName}>Temperature</Text>

            <View style={styles.conditionResult}>
              <Text style={styles.conditionValue}>28°C</Text>

              <Ionicons
                name="checkmark-circle"
                size={20}
                color="#2E7D32"
              />
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.conditionRow}>
            <Text style={styles.conditionName}>Nitrogen</Text>

            <View style={styles.conditionResult}>
              <Text style={styles.conditionValue}>Low</Text>

              <Ionicons
                name="close-circle"
                size={20}
                color="#E53935"
              />
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.conditionRow}>
            <Text style={styles.conditionName}>Soil Moisture</Text>

            <View style={styles.conditionResult}>
              <Text style={styles.conditionValue}>Good</Text>

              <Ionicons
                name="checkmark-circle"
                size={20}
                color="#2E7D32"
              />
            </View>
          </View>

        </View>


        {/* FERTILIZER */}

        <Text style={styles.sectionTitle}>
          Recommended Fertilizers
        </Text>

        <View style={styles.fertilizerContainer}>

          <View style={styles.fertilizerCard}>
            <View style={styles.fertilizerIcon}>
              <Ionicons
                name="flask-outline"
                size={24}
                color="#2E7D32"
              />
            </View>

            <Text style={styles.fertilizerName}>Urea</Text>

            <Text style={styles.fertilizerInfo}>
              Nitrogen Supplement
            </Text>
          </View>

          <View style={styles.fertilizerCard}>
            <View style={styles.fertilizerIcon}>
              <Ionicons
                name="flask-outline"
                size={24}
                color="#1565C0"
              />
            </View>

            <Text style={styles.fertilizerName}>DAP</Text>

            <Text style={styles.fertilizerInfo}>
              Phosphorus Support
            </Text>
          </View>

          <View style={styles.fertilizerCard}>
            <View style={styles.fertilizerIcon}>
              <Ionicons
                name="flask-outline"
                size={24}
                color="#EF6C00"
              />
            </View>

            <Text style={styles.fertilizerName}>MOP</Text>

            <Text style={styles.fertilizerInfo}>
              Potassium Support
            </Text>
          </View>

        </View>


        {/* NODE RECOMMENDATIONS */}

        <Text style={styles.sectionTitle}>
          Node-Wise Recommendations
        </Text>

        <View style={styles.nodeTable}>

          {nodeRecommendations.map((item) => (
            <View
              key={item.node}
              style={styles.nodeRow}
            >

              <View style={styles.nodeNumber}>
                <Text style={styles.nodeNumberText}>
                  {item.node.replace('Node ', 'N')}
                </Text>
              </View>

              <View style={styles.nodeContent}>
                <Text style={styles.nodeTitle}>
                  {item.node}
                </Text>

                <Text style={styles.nodeRecommendation}>
                  {item.recommendation}
                </Text>
              </View>

              <Ionicons
                name={
                  item.status === 'Optimal'
                    ? 'checkmark-circle'
                    : 'alert-circle'
                }
                size={22}
                color={
                  item.status === 'Optimal'
                    ? '#2E7D32'
                    : '#EF6C00'
                }
              />

            </View>
          ))}

        </View>


        {/* SAVE */}

        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => router.push('/lands')}
        >
          <Ionicons
            name="save-outline"
            size={21}
            color="#FFFFFF"
          />

          <Text style={styles.saveButtonText}>
            SAVE ANALYSIS
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
    fontSize: 19,
    fontWeight: '800',
    color: '#1B5E20',
  },


  headerPlaceholder: {
    width: 40,
  },


  content: {
    padding: 20,
    paddingBottom: 45,
  },


  summaryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E4EBE4',
  },


  summaryLabel: {
    fontSize: 11,
    fontWeight: '800',
    color: '#90A4AE',
    letterSpacing: 1,
    marginBottom: 14,
  },


  summaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 8,
  },


  summaryText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#37474F',
  },


  resultCard: {
    backgroundColor: '#1B5E20',
    borderRadius: 22,
    padding: 25,
    alignItems: 'center',
    marginBottom: 28,
  },


  cropName: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
  },


  resultSubtitle: {
    fontSize: 14,
    color: '#D7E8D8',
    marginTop: 6,
  },


  probabilityCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 7,
    borderColor: '#81C784',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },


  probabilityNumber: {
    fontSize: 32,
    fontWeight: '900',
    color: '#FFFFFF',
  },


  progressBackground: {
    width: '100%',
    height: 8,
    borderRadius: 10,
    backgroundColor: '#4C8C50',
    overflow: 'hidden',
  },


  progressFill: {
    height: '100%',
    backgroundColor: '#A5D6A7',
    borderRadius: 10,
  },


  successText: {
    color: '#E8F5E9',
    fontSize: 13,
    marginTop: 12,
  },


  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#263238',
    marginBottom: 14,
    marginTop: 5,
  },


  conditionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 28,
  },


  conditionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },


  conditionName: {
    fontSize: 15,
    color: '#607066',
  },


  conditionResult: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },


  conditionValue: {
    fontSize: 15,
    fontWeight: '700',
    color: '#263238',
  },


  divider: {
    height: 1,
    backgroundColor: '#EEF2EE',
    marginVertical: 5,
  },


  fertilizerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 28,
  },


  fertilizerCard: {
    width: '31%',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5ECE5',
  },


  fertilizerIcon: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: '#F4F8F4',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },


  fertilizerName: {
    fontSize: 15,
    fontWeight: '800',
    color: '#263238',
  },


  fertilizerInfo: {
    fontSize: 10,
    color: '#78909C',
    textAlign: 'center',
    marginTop: 4,
  },


  nodeTable: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 8,
    marginBottom: 28,
  },


  nodeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEF2EE',
  },


  nodeNumber: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },


  nodeNumberText: {
    fontWeight: '800',
    color: '#1B5E20',
  },


  nodeContent: {
    flex: 1,
  },


  nodeTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#263238',
  },


  nodeRecommendation: {
    fontSize: 12,
    color: '#607066',
    marginTop: 3,
  },


  saveButton: {
    height: 58,
    borderRadius: 15,
    backgroundColor: '#2E7D32',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },


  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },

});