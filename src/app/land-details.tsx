import { useLocalSearchParams, router } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const landData: Record<
  string,
  {
    name: string;
    area: string;
    nodes: number;
    updated: string;
  }
> = {
  'north-field': {
    name: 'North Field',
    area: '2 Acres',
    nodes: 16,
    updated: 'Today',
  },

  'home-farm': {
    name: 'Home Farm',
    area: '1.5 Acres',
    nodes: 9,
    updated: 'Yesterday',
  },
};

export default function LandDetailsScreen() {
  const { landId } = useLocalSearchParams();

  const land =
    landData[landId as string] || landData['north-field'];

  const nodeList = Array.from(
    { length: land.nodes },
    (_, index) => index + 1
  );

  const columns =
    land.nodes === 16 ? 4 : 3;

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
            <Ionicons
              name="arrow-back"
              size={24}
              color="#1B5E20"
            />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Land Details
          </Text>

          <View style={styles.headerSpacer} />
        </View>


        {/* LAND INFO */}

        <View style={styles.landHero}>
          <View style={styles.landIcon}>
            <Ionicons
              name="leaf"
              size={34}
              color="#FFFFFF"
            />
          </View>

          <Text style={styles.landName}>
            {land.name}
          </Text>

          <Text style={styles.landSubtitle}>
            Calibrated Agricultural Land
          </Text>
        </View>


        {/* LAND STATS */}

        <View style={styles.statsContainer}>

          <View style={styles.statCard}>
            <Ionicons
              name="resize-outline"
              size={24}
              color="#1B5E20"
            />

            <Text style={styles.statValue}>
              {land.area}
            </Text>

            <Text style={styles.statLabel}>
              Total Area
            </Text>
          </View>


          <View style={styles.statCard}>
            <Ionicons
              name="grid-outline"
              size={24}
              color="#1565C0"
            />

            <Text style={styles.statValue}>
              {land.nodes}
            </Text>

            <Text style={styles.statLabel}>
              Monitoring Nodes
            </Text>
          </View>

        </View>


        {/* CALIBRATION INFO */}

        <View style={styles.infoCard}>

          <View style={styles.infoIcon}>
            <Ionicons
              name="checkmark-circle"
              size={24}
              color="#2E7D32"
            />
          </View>

          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>
              Calibration Complete
            </Text>

            <Text style={styles.infoText}>
              Your land has been successfully analyzed and divided into monitoring nodes.
            </Text>
          </View>

        </View>


        {/* NODE MAP */}

        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>
              Field Monitoring Nodes
            </Text>

            <Text style={styles.sectionSubtitle}>
              Tap a node to view its soil data
            </Text>
          </View>

          <View style={styles.nodeBadge}>
            <Text style={styles.nodeBadgeText}>
              {land.nodes} Nodes
            </Text>
          </View>
        </View>


        {/* GRID */}

        <View style={styles.gridContainer}>
          {nodeList.map((node) => (
            <TouchableOpacity
              key={node}
              activeOpacity={0.75}
              onPress={() =>
                router.navigate({
                  pathname: '/node-details',
                  params: {
                    landId: landId as string,
                    nodeId: node.toString(),
                  },
                })
              }
              style={[
                styles.node,
                {
                  width:
                    columns === 4
                      ? '22%'
                      : '30%',
                },
              ]}
            >
              <View style={styles.nodeIcon}>
                <Ionicons
                  name="location"
                  size={18}
                  color="#1B5E20"
                />
              </View>

              <Text style={styles.nodeNumber}>
                N{node}
              </Text>

              <Text style={styles.nodeStatus}>
                Active
              </Text>
            </TouchableOpacity>
          ))}
        </View>


        {/* LEGEND */}

        <View style={styles.legend}>

          <View style={styles.legendItem}>
            <View
              style={[
                styles.legendDot,
                { backgroundColor: '#2E7D32' },
              ]}
            />

            <Text style={styles.legendText}>
              Healthy
            </Text>
          </View>


          <View style={styles.legendItem}>
            <View
              style={[
                styles.legendDot,
                { backgroundColor: '#F9A825' },
              ]}
            />

            <Text style={styles.legendText}>
              Attention
            </Text>
          </View>


          <View style={styles.legendItem}>
            <View
              style={[
                styles.legendDot,
                { backgroundColor: '#D32F2F' },
              ]}
            />

            <Text style={styles.legendText}>
              Critical
            </Text>
          </View>

        </View>


        {/* LAST UPDATED */}

        <View style={styles.updateContainer}>
          <Ionicons
            name="time-outline"
            size={16}
            color="#90A4AE"
          />

          <Text style={styles.updateText}>
            Last updated: {land.updated}
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

  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },


  /* HEADER */

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
  },

  backButton: {
    width: 42,
    height: 42,
    backgroundColor: '#E8F5E9',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#263238',
  },

  headerSpacer: {
    width: 42,
  },


  /* HERO */

  landHero: {
    alignItems: 'center',
    marginBottom: 25,
  },

  landIcon: {
    width: 76,
    height: 76,
    borderRadius: 25,
    backgroundColor: '#1B5E20',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 13,
  },

  landName: {
    fontSize: 27,
    fontWeight: '800',
    color: '#263238',
  },

  landSubtitle: {
    fontSize: 13,
    color: '#78909C',
    marginTop: 5,
  },


  /* STATS */

  statsContainer: {
    flexDirection: 'row',
    gap: 14,
    marginBottom: 20,
  },

  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    alignItems: 'center',
    elevation: 2,
  },

  statValue: {
    fontSize: 19,
    fontWeight: '800',
    color: '#263238',
    marginTop: 8,
  },

  statLabel: {
    fontSize: 11,
    color: '#78909C',
    marginTop: 3,
    textAlign: 'center',
  },


  /* INFO CARD */

  infoCard: {
    flexDirection: 'row',
    backgroundColor: '#E8F5E9',
    borderRadius: 18,
    padding: 16,
    marginBottom: 28,
  },

  infoIcon: {
    marginRight: 12,
  },

  infoContent: {
    flex: 1,
  },

  infoTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#1B5E20',
    marginBottom: 4,
  },

  infoText: {
    fontSize: 12,
    color: '#527A59',
    lineHeight: 18,
  },


  /* SECTION */

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: '#263238',
  },

  sectionSubtitle: {
    fontSize: 12,
    color: '#78909C',
    marginTop: 4,
  },

  nodeBadge: {
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 11,
    paddingVertical: 6,
    borderRadius: 10,
  },

  nodeBadgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#1565C0',
  },


  /* NODE GRID */

  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },

  node: {
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    paddingVertical: 16,
    alignItems: 'center',
    elevation: 2,
  },

  nodeIcon: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 7,
  },

  nodeNumber: {
    fontSize: 14,
    fontWeight: '800',
    color: '#263238',
  },

  nodeStatus: {
    fontSize: 10,
    color: '#2E7D32',
    marginTop: 3,
  },


  /* LEGEND */

  legend: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    borderRadius: 16,
    marginTop: 24,
  },

  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 10,
    marginRight: 5,
  },

  legendText: {
    fontSize: 10,
    color: '#607D8B',
  },


  /* UPDATE */

  updateContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  updateText: {
    fontSize: 11,
    color: '#90A4AE',
    marginLeft: 5,
  },

});