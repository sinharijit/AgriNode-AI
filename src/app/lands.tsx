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

const lands = [
  {
    id: 'north-field',
    name: 'North Field',
    area: '2 Acres',
    nodes: 16,
    updated: 'Today',
    icon: 'leaf-outline',
    color: '#1B5E20',
  },
  {
    id: 'home-farm',
    name: 'Home Farm',
    area: '1.5 Acres',
    nodes: 9,
    updated: 'Yesterday',
    icon: 'leaf-outline',
    color: '#2E7D32',
  },
];

export default function LandsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* HEADER */}

        <View style={styles.header}>
          <View>
            <Text style={styles.title}>My Lands</Text>

            <Text style={styles.subtitle}>
              Manage your calibrated agricultural lands
            </Text>
          </View>

          <View style={styles.landCount}>
            <Text style={styles.landCountNumber}>
              {lands.length}
            </Text>

            <Text style={styles.landCountText}>
              Lands
            </Text>
          </View>
        </View>


        {/* SUMMARY CARD */}

        <View style={styles.summaryCard}>
          <View style={styles.summaryIcon}>
            <Ionicons
              name="map-outline"
              size={30}
              color="#FFFFFF"
            />
          </View>

          <View style={styles.summaryContent}>
            <Text style={styles.summaryTitle}>
              Your Agricultural Network
            </Text>

            <Text style={styles.summaryText}>
              {lands.length} calibrated lands with 25 total
              monitoring nodes.
            </Text>
          </View>
        </View>


        {/* SECTION TITLE */}

        <Text style={styles.sectionTitle}>
          Calibrated Lands
        </Text>


        {/* LAND CARDS */}

        {lands.map((land) => (
          <TouchableOpacity
            key={land.id}
            style={styles.landCard}
            activeOpacity={0.8}
            onPress={() =>
              router.push({
                pathname: '/land-details',
                params: {
                  landId: land.id,
                },
              })
            }
          >
            {/* TOP */}

            <View style={styles.landTop}>
              <View
                style={[
                  styles.landIcon,
                  { backgroundColor: `${land.color}15` },
                ]}
              >
                <Ionicons
                  name="leaf-outline"
                  size={27}
                  color={land.color}
                />
              </View>

              <View style={styles.landNameContainer}>
                <Text style={styles.landName}>
                  {land.name}
                </Text>

                <Text style={styles.landStatus}>
                  Calibrated & Active
                </Text>
              </View>

              <Ionicons
                name="chevron-forward"
                size={22}
                color="#90A4AE"
              />
            </View>


            {/* DIVIDER */}

            <View style={styles.divider} />


            {/* LAND DATA */}

            <View style={styles.landInfoRow}>
              <View style={styles.infoBlock}>
                <Ionicons
                  name="resize-outline"
                  size={19}
                  color="#607D8B"
                />

                <View>
                  <Text style={styles.infoLabel}>
                    Total Area
                  </Text>

                  <Text style={styles.infoValue}>
                    {land.area}
                  </Text>
                </View>
              </View>


              <View style={styles.infoBlock}>
                <Ionicons
                  name="grid-outline"
                  size={19}
                  color="#607D8B"
                />

                <View>
                  <Text style={styles.infoLabel}>
                    Monitoring Nodes
                  </Text>

                  <Text style={styles.infoValue}>
                    {land.nodes}
                  </Text>
                </View>
              </View>
            </View>


            {/* FOOTER */}

            <View style={styles.cardFooter}>
              <Ionicons
                name="time-outline"
                size={16}
                color="#90A4AE"
              />

              <Text style={styles.updatedText}>
                Last Updated: {land.updated}
              </Text>

              <View style={styles.viewDetails}>
                <Text style={styles.viewDetailsText}>
                  View Details
                </Text>
              </View>
            </View>

          </TouchableOpacity>
        ))}


        {/* ADD NEW LAND */}

        <TouchableOpacity
          style={styles.addLandButton}
          onPress={() => router.push('/calibrate')}
        >
          <View style={styles.addIcon}>
            <Ionicons
              name="add"
              size={25}
              color="#1B5E20"
            />
          </View>

          <View style={styles.addContent}>
            <Text style={styles.addTitle}>
              Calibrate New Land
            </Text>

            <Text style={styles.addText}>
              Add another agricultural field to AgriNode AI
            </Text>
          </View>

          <Ionicons
            name="arrow-forward"
            size={21}
            color="#1B5E20"
          />
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

  scrollContent: {
    padding: 20,
    paddingBottom: 35,
  },


  /* HEADER */

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },

  title: {
    fontSize: 29,
    fontWeight: '800',
    color: '#1B1F1B',
  },

  subtitle: {
    fontSize: 13,
    color: '#78909C',
    marginTop: 5,
  },

  landCount: {
    width: 58,
    height: 58,
    backgroundColor: '#E8F5E9',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },

  landCountNumber: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1B5E20',
  },

  landCountText: {
    fontSize: 10,
    color: '#607D8B',
  },


  /* SUMMARY */

  summaryCard: {
    flexDirection: 'row',
    backgroundColor: '#1B5E20',
    borderRadius: 22,
    padding: 20,
    alignItems: 'center',
    marginBottom: 26,
  },

  summaryIcon: {
    width: 60,
    height: 60,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  summaryContent: {
    flex: 1,
  },

  summaryTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 5,
  },

  summaryText: {
    fontSize: 13,
    color: '#D7EBD8',
    lineHeight: 19,
  },


  /* SECTION */

  sectionTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: '#263238',
    marginBottom: 14,
  },


  /* LAND CARD */

  landCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 18,
    marginBottom: 17,
    elevation: 2,
  },

  landTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  landIcon: {
    width: 54,
    height: 54,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 13,
  },

  landNameContainer: {
    flex: 1,
  },

  landName: {
    fontSize: 18,
    fontWeight: '800',
    color: '#263238',
  },

  landStatus: {
    fontSize: 12,
    color: '#2E7D32',
    marginTop: 4,
  },

  divider: {
    height: 1,
    backgroundColor: '#EDF1ED',
    marginVertical: 16,
  },


  /* INFO */

  landInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  infoBlock: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },

  infoLabel: {
    fontSize: 11,
    color: '#90A4AE',
  },

  infoValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#37474F',
    marginTop: 2,
  },


  /* FOOTER */

  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 17,
  },

  updatedText: {
    fontSize: 11,
    color: '#90A4AE',
    marginLeft: 5,
  },

  viewDetails: {
    marginLeft: 'auto',
  },

  viewDetailsText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1B5E20',
  },


  /* ADD LAND */

  addLandButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#C8E6C9',
    borderStyle: 'dashed',
    padding: 17,
    marginTop: 5,
  },

  addIcon: {
    width: 46,
    height: 46,
    borderRadius: 15,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 13,
  },

  addContent: {
    flex: 1,
  },

  addTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1B5E20',
  },

  addText: {
    fontSize: 11,
    color: '#78909C',
    marginTop: 3,
  },

});