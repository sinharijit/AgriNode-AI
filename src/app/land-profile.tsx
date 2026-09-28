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

export default function LandProfileScreen() {
  const router = useRouter();

  const lands = [
    {
      id: 'north-field',
      name: 'North Field',
      area: '2 Acres',
      nodes: 16,
      analyses: 3,
      updated: 'Today',
    },
    {
      id: 'home-farm',
      name: 'Home Farm',
      area: '1.5 Acres',
      nodes: 9,
      analyses: 2,
      updated: 'Yesterday',
    },
    {
      id: 'rice-field',
      name: 'Rice Field',
      area: '3 Acres',
      nodes: 25,
      analyses: 4,
      updated: '2 Days Ago',
    },
    {
      id: 'east-farm',
      name: 'East Farm',
      area: '2.8 Acres',
      nodes: 16,
      analyses: 3,
      updated: '4 Days Ago',
    },
    {
      id: 'green-valley',
      name: 'Green Valley Farm',
      area: '4 Acres',
      nodes: 36,
      analyses: 5,
      updated: '1 Week Ago',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>

      {/* HEADER */}

      <View style={styles.header}>

        <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.push('/')}
            >
            <Ionicons
                name="arrow-back"
                size={24}
                color="#1B5E20"
            />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Land Profile
        </Text>

        <View style={styles.headerPlaceholder} />

      </View>


      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        {/* INTRODUCTION */}

        <View style={styles.introSection}>

          <View style={styles.introIcon}>
            <Ionicons
              name="folder-open-outline"
              size={30}
              color="#2E7D32"
            />
          </View>

          <View style={styles.introTextContainer}>
            <Text style={styles.introTitle}>
              Your Land Profiles
            </Text>

            <Text style={styles.introSubtitle}>
              Select a land to view its previous crop analyses and recommendations.
            </Text>
          </View>

        </View>


        {/* LAND COUNT */}

        <View style={styles.sectionHeader}>

          <Text style={styles.sectionTitle}>
            Your Lands
          </Text>

          <View style={styles.countBadge}>
            <Text style={styles.countText}>
              {lands.length} Lands
            </Text>
          </View>

        </View>


        {/* LAND LIST */}

        {lands.map((land) => (

          <TouchableOpacity
            key={land.id}
            style={styles.landCard}
            activeOpacity={0.8}
            onPress={() =>
              router.push({
                pathname: '/land-analyses',
                params: {
                  landId: land.id,
                  landName: land.name,
                  area: land.area,
                  nodes: land.nodes.toString(),
                  analyses: land.analyses.toString(),
                },
              })
            }
          >

            <View style={styles.landIcon}>
              <Ionicons
                name="leaf-outline"
                size={28}
                color="#2E7D32"
              />
            </View>


            <View style={styles.landInfo}>

              <Text style={styles.landName}>
                {land.name}
              </Text>

              <View style={styles.detailRow}>

                <Text style={styles.landDetail}>
                  Area: {land.area}
                </Text>

                <View style={styles.dot} />

                <Text style={styles.landDetail}>
                  {land.nodes} Nodes
                </Text>

              </View>

              <Text style={styles.analysisInfo}>
                {land.analyses} Saved Analyses
              </Text>

              <Text style={styles.updatedText}>
                Updated: {land.updated}
              </Text>

            </View>


            <Ionicons
              name="chevron-forward"
              size={23}
              color="#90A4AE"
            />

          </TouchableOpacity>

        ))}


        {/* INFORMATION BOX */}

        <View style={styles.infoBox}>

          <Ionicons
            name="information-circle-outline"
            size={22}
            color="#1565C0"
          />

          <Text style={styles.infoText}>
            Land Profiles store your previous crop analyses, fertilizer recommendations and node-level results.
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
    fontSize: 20,
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


  introSection: {
    backgroundColor: '#E8F5E9',
    borderRadius: 18,
    padding: 17,
    flexDirection: 'row',
    marginBottom: 28,
  },


  introIcon: {
    width: 55,
    height: 55,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },


  introTextContainer: {
    flex: 1,
  },


  introTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#1B5E20',
    marginBottom: 5,
  },


  introSubtitle: {
    fontSize: 12,
    lineHeight: 18,
    color: '#607066',
  },


  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },


  sectionTitle: {
    fontSize: 21,
    fontWeight: '800',
    color: '#263238',
  },


  countBadge: {
    backgroundColor: '#E8F0E8',
    paddingHorizontal: 11,
    paddingVertical: 6,
    borderRadius: 14,
  },


  countText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#2E7D32',
  },


  landCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    padding: 17,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E5ECE5',
  },


  landIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },


  landInfo: {
    flex: 1,
  },


  landName: {
    fontSize: 17,
    fontWeight: '800',
    color: '#263238',
    marginBottom: 6,
  },


  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },


  landDetail: {
    fontSize: 12,
    color: '#607066',
  },


  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#B0BEC5',
    marginHorizontal: 7,
  },


  analysisInfo: {
    fontSize: 12,
    color: '#2E7D32',
    fontWeight: '600',
    marginTop: 5,
  },


  updatedText: {
    fontSize: 11,
    color: '#90A4AE',
    marginTop: 3,
  },


  infoBox: {
    flexDirection: 'row',
    backgroundColor: '#E3F2FD',
    borderRadius: 15,
    padding: 16,
    marginTop: 10,
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