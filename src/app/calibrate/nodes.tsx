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
import { router } from 'expo-router';

export default function NodesScreen() {
  const nodes = Array.from({ length: 16 }, (_, index) => index + 1);

  const handleNodePress = (nodeNumber: number) => {
    router.push({
      pathname: '/calibrate/node-details',
      params: {
        node: nodeNumber.toString(),
      },
    });
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
            <Text style={styles.title}>Land Nodes</Text>

            <Text style={styles.subtitle}>
              North Field • 16 Monitoring Nodes
            </Text>
          </View>
        </View>

        {/* LAND SUMMARY */}

        <View style={styles.summaryCard}>
          <View style={styles.summaryIcon}>
            <Ionicons
              name="grid-outline"
              size={30}
              color="#FFFFFF"
            />
          </View>

          <View style={styles.summaryContent}>
            <Text style={styles.summaryTitle}>
              Land Successfully Divided
            </Text>

            <Text style={styles.summaryText}>
              Your field has been divided into 16 intelligent
              monitoring zones based on calibration analysis.
            </Text>
          </View>
        </View>

        {/* GRID INFO */}

        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <Ionicons
              name="grid-outline"
              size={22}
              color="#1565C0"
            />

            <View>
              <Text style={styles.infoLabel}>Total Nodes</Text>
              <Text style={styles.infoValue}>16</Text>
            </View>
          </View>

          <View style={styles.infoDivider} />

          <View style={styles.infoItem}>
            <Ionicons
              name="resize-outline"
              size={22}
              color="#EF6C00"
            />

            <View>
              <Text style={styles.infoLabel}>Node Size</Text>
              <Text style={styles.infoValue}>25m × 25m</Text>
            </View>
          </View>
        </View>

        {/* INSTRUCTION */}

        <View style={styles.instructionCard}>
          <Ionicons
            name="information-circle-outline"
            size={22}
            color="#1565C0"
          />

          <Text style={styles.instructionText}>
            Tap any node to view its soil and environmental
            data or collect a new sample.
          </Text>
        </View>

        {/* NODE GRID */}

        <Text style={styles.sectionTitle}>
          Field Node Map
        </Text>

        <View style={styles.gridCard}>
          <View style={styles.grid}>
            {nodes.map((node) => (
              <TouchableOpacity
                key={node}
                style={styles.node}
                onPress={() => handleNodePress(node)}
                activeOpacity={0.75}
              >
                <View style={styles.nodeCircle}>
                  <Ionicons
                    name="location"
                    size={18}
                    color="#1B5E20"
                  />
                </View>

                <Text style={styles.nodeText}>
                  N{node}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* NODE STATUS */}

        <Text style={styles.sectionTitle}>
          Node Status
        </Text>

        <View style={styles.statusCard}>
          <StatusRow
            color="#2E7D32"
            label="Sample Collected"
            value="0 Nodes"
          />

          <StatusRow
            color="#EF6C00"
            label="Pending Sampling"
            value="16 Nodes"
          />
        </View>

        {/* START SAMPLING */}

        <TouchableOpacity
          style={styles.startButton}
          onPress={() => handleNodePress(1)}
        >
          <Ionicons
            name="flask-outline"
            size={23}
            color="#FFFFFF"
          />

          <Text style={styles.startButtonText}>
            START NODE SAMPLING
          </Text>

          <Ionicons
            name="arrow-forward"
            size={21}
            color="#FFFFFF"
          />
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}


/* STATUS ROW */

function StatusRow({
  color,
  label,
  value,
}: {
  color: string;
  label: string;
  value: string;
}) {
  return (
    <View style={styles.statusRow}>
      <View
        style={[
          styles.statusDot,
          { backgroundColor: color },
        ]}
      />

      <Text style={styles.statusLabel}>
        {label}
      </Text>

      <Text style={styles.statusValue}>
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
    marginBottom: 25,
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


  /* SUMMARY */

  summaryCard: {
    flexDirection: 'row',
    backgroundColor: '#E8F5E9',
    borderRadius: 20,
    padding: 18,
    marginBottom: 18,
    alignItems: 'center',
  },

  summaryIcon: {
    width: 58,
    height: 58,
    borderRadius: 18,
    backgroundColor: '#1B5E20',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  summaryContent: {
    flex: 1,
  },

  summaryTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1B5E20',
    marginBottom: 5,
  },

  summaryText: {
    fontSize: 13,
    lineHeight: 19,
    color: '#54745A',
  },


  /* INFO */

  infoRow: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    elevation: 2,
    marginBottom: 18,
  },

  infoItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  infoDivider: {
    width: 1,
    backgroundColor: '#E8EDE8',
    marginHorizontal: 10,
  },

  infoLabel: {
    fontSize: 11,
    color: '#78909C',
  },

  infoValue: {
    fontSize: 15,
    fontWeight: '800',
    color: '#263238',
    marginTop: 2,
  },


  /* INSTRUCTION */

  instructionCard: {
    flexDirection: 'row',
    backgroundColor: '#E3F2FD',
    borderRadius: 16,
    padding: 15,
    gap: 10,
    marginBottom: 24,
  },

  instructionText: {
    flex: 1,
    fontSize: 13,
    lineHeight: 19,
    color: '#345A78',
  },


  /* SECTION */

  sectionTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: '#263238',
    marginBottom: 14,
  },


  /* GRID */

  gridCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 16,
    elevation: 2,
    marginBottom: 25,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  node: {
    width: '25%',
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: '#DCE6DC',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8FCF8',
  },

  nodeCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },

  nodeText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#1B5E20',
  },


  /* STATUS */

  statusCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    elevation: 2,
    marginBottom: 24,
  },

  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 42,
  },

  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 12,
  },

  statusLabel: {
    flex: 1,
    fontSize: 14,
    color: '#607D8B',
  },

  statusValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#263238',
  },


  /* BUTTON */

  startButton: {
    height: 60,
    backgroundColor: '#1B5E20',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    elevation: 3,
  },

  startButtonText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.3,
  },

});