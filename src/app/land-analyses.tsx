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

export default function LandAnalysesScreen() {
  const router = useRouter();

  const params = useLocalSearchParams();

  const landName = params.landName || 'North Field';
  const area = params.area || '2 Acres';
  const nodes = params.nodes || '16';

  /*
    Sample saved analyses.

    Later these will come from the database.
  */

  const analyses = [
    {
      id: 'tomato',
      crop: 'Tomato',
      probability: '82%',
      lastAnalysis: 'Today',
      icon: 'nutrition-outline',
      color: '#E53935',
    },
    {
      id: 'rice',
      crop: 'Rice',
      probability: '91%',
      lastAnalysis: '2 Days Ago',
      icon: 'leaf-outline',
      color: '#2E7D32',
    },
    {
      id: 'potato',
      crop: 'Potato',
      probability: '76%',
      lastAnalysis: '5 Days Ago',
      icon: 'nutrition-outline',
      color: '#8D6E63',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>

      {/* HEADER */}

      <View style={styles.header}>

        <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.push('/land-profile')}
            >
            <Ionicons
                name="arrow-back"
                size={24}
                color="#1B5E20"
            />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Previous Analyses
        </Text>

        <View style={styles.headerPlaceholder} />

      </View>


      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        {/* SELECTED LAND CARD */}

        <View style={styles.landCard}>

          <View style={styles.landIcon}>
            <Ionicons
              name="leaf-outline"
              size={28}
              color="#2E7D32"
            />
          </View>

          <View style={styles.landInfo}>

            <Text style={styles.landName}>
              {landName}
            </Text>

            <Text style={styles.landDetails}>
              {area} • {nodes} Nodes
            </Text>

          </View>

        </View>


        {/* SECTION HEADER */}

        <View style={styles.sectionHeader}>

          <View>

            <Text style={styles.sectionTitle}>
              Saved Crop Analyses
            </Text>

            <Text style={styles.sectionSubtitle}>
              Select an analysis to view complete results
            </Text>

          </View>

          <View style={styles.countBadge}>
            <Text style={styles.countText}>
              {analyses.length}
            </Text>
          </View>

        </View>


        {/* ANALYSIS CARDS */}

        {analyses.map((analysis) => (

          <TouchableOpacity
            key={analysis.id}
            style={styles.analysisCard}
            activeOpacity={0.8}
            onPress={() =>
              router.push({
                pathname: '/profile-analysis',
                params: {
                  crop: analysis.crop,
                  land: landName,
                  probability: analysis.probability,
                  lastAnalysis: analysis.lastAnalysis,
                },
              })
            }
          >

            {/* CROP ICON */}

            <View
              style={[
                styles.cropIcon,
                {
                  backgroundColor: `${analysis.color}18`,
                },
              ]}
            >

              <Ionicons
                name={analysis.icon as any}
                size={26}
                color={analysis.color}
              />

            </View>


            {/* ANALYSIS INFORMATION */}

            <View style={styles.analysisInfo}>

              <Text style={styles.cropName}>
                {analysis.crop}
              </Text>

              <Text style={styles.successText}>
                Success Probability: {analysis.probability}
              </Text>

              <Text style={styles.lastAnalysis}>
                Last Analysis: {analysis.lastAnalysis}
              </Text>

            </View>


            <Ionicons
              name="chevron-forward"
              size={22}
              color="#90A4AE"
            />

          </TouchableOpacity>

        ))}


        {/* INFORMATION */}

        <View style={styles.infoBox}>

          <Ionicons
            name="time-outline"
            size={22}
            color="#1565C0"
          />

          <Text style={styles.infoText}>
            These are previously generated analyses. You can review
            recommendations without running the AI analysis again.
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


  landCard: {
    backgroundColor: '#1B5E20',
    borderRadius: 18,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
  },


  landIcon: {
    width: 55,
    height: 55,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },


  landInfo: {
    flex: 1,
  },


  landName: {
    fontSize: 21,
    fontWeight: '800',
    color: '#FFFFFF',
  },


  landDetails: {
    fontSize: 14,
    color: '#D7E8D8',
    marginTop: 5,
  },


  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },


  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#263238',
  },


  sectionSubtitle: {
    fontSize: 12,
    color: '#78909C',
    marginTop: 4,
  },


  countBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
  },


  countText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#2E7D32',
  },


  analysisCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    padding: 17,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E5ECE5',
  },


  cropIcon: {
    width: 55,
    height: 55,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },


  analysisInfo: {
    flex: 1,
  },


  cropName: {
    fontSize: 18,
    fontWeight: '800',
    color: '#263238',
    marginBottom: 5,
  },


  successText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#2E7D32',
  },


  lastAnalysis: {
    fontSize: 12,
    color: '#90A4AE',
    marginTop: 4,
  },


  infoBox: {
    flexDirection: 'row',
    backgroundColor: '#E3F2FD',
    borderRadius: 15,
    padding: 16,
    marginTop: 12,
    alignItems: 'flex-start',
    gap: 10,
  },


  infoText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 18,
    color: '#455A64',
  },

});