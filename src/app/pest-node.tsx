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

export default function PestNodeScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const landName = String(params.landName || 'Selected Land');
  const area = String(params.area || '');
  const nodeCount = Number(params.nodes || 9);

  const nodes = Array.from(
    { length: nodeCount },
    (_, index) => index + 1
  );

  const columns =
    nodeCount <= 9 ? 3 : nodeCount <= 16 ? 4 : 5;

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.replace('/pest')}
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color="#D97706"
          />
        </TouchableOpacity>

        <View style={styles.headerTextContainer}>
          <Text style={styles.title}>Select Node</Text>
          <Text style={styles.subtitle}>
            Choose a node for pest detection
          </Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* LAND INFORMATION */}
        <View style={styles.landCard}>
          <View style={styles.landIcon}>
            <Ionicons
              name="map"
              size={27}
              color="#EF6C00"
            />
          </View>

          <View style={styles.landInfo}>
            <Text style={styles.landName}>
              {landName}
            </Text>

            <View style={styles.metaRow}>
              <View style={styles.metaItem}>
                <Ionicons
                  name="resize-outline"
                  size={15}
                  color="#78909C"
                />
                <Text style={styles.metaText}>
                  {area}
                </Text>
              </View>

              <View style={styles.metaItem}>
                <Ionicons
                  name="grid-outline"
                  size={15}
                  color="#78909C"
                />
                <Text style={styles.metaText}>
                  {nodeCount} Nodes
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* INSTRUCTION */}
        <View style={styles.instructionCard}>
          <View style={styles.instructionIcon}>
            <Ionicons
              name="camera-outline"
              size={23}
              color="#1565C0"
            />
          </View>

          <View style={styles.instructionContent}>
            <Text style={styles.instructionTitle}>
              Select a Field Node
            </Text>

            <Text style={styles.instructionText}>
              Cameras installed at each node capture crop images
              from multiple angles. Select the node where you want
              to perform pest detection.
            </Text>
          </View>
        </View>

        {/* FIELD MAP */}
        <Text style={styles.sectionTitle}>
          {landName} • Node Map
        </Text>

        <View style={styles.mapCard}>
          <View
            style={[
              styles.nodeGrid,
              { columnGap: 12, rowGap: 12 },
            ]}
          >
            {nodes.map((node) => (
              <TouchableOpacity
                key={node}
                activeOpacity={0.8}
                style={[
                  styles.node,
                  {
                    width: `${100 / columns - 2}%`,
                  },
                ]}
                onPress={() =>
                  router.push({
                    pathname: '/pest-capture',
                    params: {
                      landId: String(params.landId || ''),
                      landName,
                      area,
                      nodeNumber: node.toString(),
                    },
                  })
                }
              >
                <View style={styles.nodeIcon}>
                  <Ionicons
                    name="radio-button-on"
                    size={17}
                    color="#EF6C00"
                  />
                </View>

                <Text style={styles.nodeText}>
                  N{node}
                </Text>

                <Text style={styles.nodeStatus}>
                  Ready
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* CAMERA INFO */}
        <View style={styles.cameraInfoCard}>
          <Ionicons
            name="videocam-outline"
            size={24}
            color="#EF6C00"
          />

          <View style={styles.cameraInfoContent}>
            <Text style={styles.cameraInfoTitle}>
              Node Camera System
            </Text>

            <Text style={styles.cameraInfoText}>
              Each field node is equipped with a camera. The
              camera captures multiple views of the crops at the
              selected node for AI-based pest detection.
            </Text>
          </View>
        </View>

        <View style={{ height: 30 }} />
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

  headerTextContainer: {
    flex: 1,
  },

  title: {
    fontSize: 21,
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

  landCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 17,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8EDE8',
  },

  landIcon: {
    width: 56,
    height: 56,
    borderRadius: 17,
    backgroundColor: '#FFF3E0',
    justifyContent: 'center',
    alignItems: 'center',
  },

  landInfo: {
    flex: 1,
    marginLeft: 14,
  },

  landName: {
    fontSize: 17,
    fontWeight: '800',
    color: '#263238',
  },

  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginTop: 7,
  },

  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  metaText: {
    fontSize: 11,
    color: '#78909C',
  },

  instructionCard: {
    backgroundColor: '#EAF3FA',
    borderRadius: 18,
    padding: 16,
    marginTop: 16,
    flexDirection: 'row',
  },

  instructionIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  instructionContent: {
    flex: 1,
    marginLeft: 11,
  },

  instructionTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#1565C0',
  },

  instructionText: {
    fontSize: 11,
    color: '#45606F',
    lineHeight: 17,
    marginTop: 4,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: '#263238',
    marginTop: 27,
    marginBottom: 13,
  },

  mapCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#E8EDE8',
  },

  nodeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },

  node: {
    minHeight: 92,
    borderRadius: 16,
    backgroundColor: '#FFF8E1',
    borderWidth: 1,
    borderColor: '#FFE0B2',
    justifyContent: 'center',
    alignItems: 'center',
  },

  nodeIcon: {
    width: 31,
    height: 31,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },

  nodeText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#D97706',
  },

  nodeStatus: {
    fontSize: 9,
    color: '#8D6E63',
    marginTop: 2,
  },

  cameraInfoCard: {
    backgroundColor: '#FFF8E1',
    borderRadius: 18,
    padding: 16,
    marginTop: 16,
    flexDirection: 'row',
  },

  cameraInfoContent: {
    flex: 1,
    marginLeft: 11,
  },

  cameraInfoTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#C56A00',
  },

  cameraInfoText: {
    fontSize: 11,
    color: '#795548',
    lineHeight: 17,
    marginTop: 4,
  },
});