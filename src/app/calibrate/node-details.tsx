import { SafeAreaView } from 'react-native-safe-area-context';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';

export default function NodeDetailsScreen() {
  const { node } = useLocalSearchParams();

  const nodeNumber = node || '1';

  const [sampleCollected, setSampleCollected] = useState(false);

  const handleTakeSample = () => {
    setSampleCollected(true);

    Alert.alert(
      'Sample Collected Successfully',
      `Soil and environmental data for Node ${nodeNumber} has been recorded.`,
      [
        {
          text: 'View Data',
          style: 'default',
        },
      ]
    );
  };

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

          <View>
            <Text style={styles.title}>
              Node {nodeNumber}
            </Text>

            <Text style={styles.subtitle}>
              Land monitoring details
            </Text>
          </View>
        </View>


        {/* NODE HERO */}

        <View style={styles.nodeHero}>
          <View style={styles.nodeIcon}>
            <Ionicons
              name="location"
              size={48}
              color="#FFFFFF"
            />
          </View>

          <Text style={styles.nodeHeroTitle}>
            NODE {nodeNumber}
          </Text>

          <Text style={styles.nodeHeroText}>
            North Field • Monitoring Zone {nodeNumber}
          </Text>

          <View
            style={[
              styles.statusBadge,
              sampleCollected
                ? styles.statusCollected
                : styles.statusPending,
            ]}
          >
            <Ionicons
              name={
                sampleCollected
                  ? 'checkmark-circle'
                  : 'time-outline'
              }
              size={17}
              color={
                sampleCollected
                  ? '#1B5E20'
                  : '#EF6C00'
              }
            />

            <Text
              style={[
                styles.statusText,
                {
                  color: sampleCollected
                    ? '#1B5E20'
                    : '#EF6C00',
                },
              ]}
            >
              {sampleCollected
                ? 'Sample Collected'
                : 'Sampling Pending'}
            </Text>
          </View>
        </View>


        {/* INSTRUCTIONS */}

        {!sampleCollected && (
          <View style={styles.instructionCard}>
            <Ionicons
              name="information-circle-outline"
              size={23}
              color="#1565C0"
            />

            <View style={styles.instructionContent}>
              <Text style={styles.instructionTitle}>
                Collect Node Sample
              </Text>

              <Text style={styles.instructionText}>
                Place the soil probe inside this monitoring zone
                and connect the AgriNode device to collect soil
                and environmental readings.
              </Text>
            </View>
          </View>
        )}


        {/* DATA */}

        {sampleCollected ? (
          <>
            <Text style={styles.sectionTitle}>
              Soil Data
            </Text>

            <View style={styles.dataCard}>

              <DataRow
                icon="leaf-outline"
                label="Nitrogen"
                value="45 mg/kg"
                color="#2E7D32"
              />

              <DataRow
                icon="nutrition-outline"
                label="Phosphorus"
                value="32 mg/kg"
                color="#EF6C00"
              />

              <DataRow
                icon="flask-outline"
                label="Potassium"
                value="120 mg/kg"
                color="#7B1FA2"
              />

              <DataRow
                icon="water-outline"
                label="pH Level"
                value="6.5"
                color="#1565C0"
              />

              <DataRow
                icon="pulse-outline"
                label="Electrical Conductivity"
                value="1.2 dS/m"
                color="#00838F"
              />

              <DataRow
                icon="water-outline"
                label="Soil Moisture"
                value="35%"
                color="#0277BD"
              />

            </View>


            <Text style={styles.sectionTitle}>
              Environment Data
            </Text>

            <View style={styles.dataCard}>

              <DataRow
                icon="thermometer-outline"
                label="Temperature"
                value="29°C"
                color="#E65100"
              />

              <DataRow
                icon="cloud-outline"
                label="Humidity"
                value="72%"
                color="#1565C0"
              />

            </View>


            {/* SAMPLE TIME */}

            <View style={styles.sampleInfo}>
              <Ionicons
                name="time-outline"
                size={20}
                color="#607D8B"
              />

              <Text style={styles.sampleInfoText}>
                Last sample: Just now
              </Text>
            </View>
          </>
        ) : (

          <View style={styles.emptyDataCard}>
            <Ionicons
              name="flask-outline"
              size={50}
              color="#B0BEC5"
            />

            <Text style={styles.emptyTitle}>
              No Sample Data Yet
            </Text>

            <Text style={styles.emptyText}>
              Collect a soil sample from this node to view
              nutrient, soil and environmental readings.
            </Text>
          </View>

        )}


        {/* TAKE SAMPLE BUTTON */}

        {!sampleCollected && (
          <TouchableOpacity
            style={styles.sampleButton}
            onPress={handleTakeSample}
          >
            <Ionicons
              name="flask-outline"
              size={23}
              color="#FFFFFF"
            />

            <Text style={styles.sampleButtonText}>
              TAKE SAMPLE
            </Text>
          </TouchableOpacity>
        )}


        {/* AFTER SAMPLE */}

        {sampleCollected && (
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => {
              const nextNode =
                Number(nodeNumber) < 16
                  ? Number(nodeNumber) + 1
                  : 1;

              router.replace({
                pathname: '/calibrate/node-details',
                params: {
                  node: nextNode.toString(),
                },
              });
            }}
          >
            <Text style={styles.nextButtonText}>
              NEXT NODE
            </Text>

            <Ionicons
              name="arrow-forward"
              size={21}
              color="#FFFFFF"
            />
          </TouchableOpacity>
        )}

      </ScrollView>
    </SafeAreaView>
  );
}


/* DATA ROW */

function DataRow({
  icon,
  label,
  value,
  color,
}: {
  icon: any;
  label: string;
  value: string;
  color: string;
}) {
  return (
    <View style={styles.dataRow}>
      <View
        style={[
          styles.dataIcon,
          { backgroundColor: `${color}15` },
        ]}
      >
        <Ionicons
          name={icon}
          size={20}
          color={color}
        />
      </View>

      <Text style={styles.dataLabel}>
        {label}
      </Text>

      <Text
        style={[
          styles.dataValue,
          { color },
        ]}
      >
        {value}
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


  /* HEADER */

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },

  backButton: {
    width: 44,
    height: 44,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
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


  /* HERO */

  nodeHero: {
    backgroundColor: '#1B5E20',
    borderRadius: 24,
    padding: 25,
    alignItems: 'center',
    marginBottom: 20,
  },

  nodeIcon: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: 'rgba(255,255,255,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 13,
  },

  nodeHeroTitle: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '900',
  },

  nodeHeroText: {
    color: '#D8EBD9',
    fontSize: 13,
    marginTop: 5,
  },

  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 13,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 16,
  },

  statusPending: {
    backgroundColor: '#FFF3E0',
  },

  statusCollected: {
    backgroundColor: '#E8F5E9',
  },

  statusText: {
    fontSize: 12,
    fontWeight: '700',
  },


  /* INSTRUCTION */

  instructionCard: {
    flexDirection: 'row',
    backgroundColor: '#E3F2FD',
    padding: 17,
    borderRadius: 18,
    gap: 12,
    marginBottom: 24,
  },

  instructionContent: {
    flex: 1,
  },

  instructionTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1565C0',
    marginBottom: 5,
  },

  instructionText: {
    fontSize: 13,
    lineHeight: 19,
    color: '#456B88',
  },


  /* EMPTY */

  emptyDataCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 35,
    alignItems: 'center',
    elevation: 2,
    marginBottom: 24,
  },

  emptyTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#37474F',
    marginTop: 14,
  },

  emptyText: {
    fontSize: 13,
    lineHeight: 20,
    color: '#78909C',
    textAlign: 'center',
    marginTop: 8,
  },


  /* SECTION */

  sectionTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: '#263238',
    marginBottom: 13,
    marginTop: 5,
  },


  /* DATA */

  dataCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 17,
    elevation: 2,
    marginBottom: 22,
  },

  dataRow: {
    minHeight: 60,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EEF2EE',
  },

  dataIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 13,
  },

  dataLabel: {
    flex: 1,
    fontSize: 14,
    color: '#607D8B',
  },

  dataValue: {
    fontSize: 14,
    fontWeight: '800',
  },


  /* SAMPLE INFO */

  sampleInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    marginBottom: 22,
  },

  sampleInfoText: {
    fontSize: 13,
    color: '#607D8B',
  },


  /* BUTTON */

  sampleButton: {
    height: 60,
    backgroundColor: '#1B5E20',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    elevation: 3,
  },

  sampleButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 0.4,
  },

  nextButton: {
    height: 60,
    backgroundColor: '#1565C0',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    elevation: 3,
  },

  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
  },

});