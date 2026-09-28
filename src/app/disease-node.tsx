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

export default function DiseaseNodeScreen() {
  const router = useRouter();

  const { landId, landName, area, nodes } = useLocalSearchParams();

  const totalNodes = Number(nodes) || 9;

  const nodeList = Array.from(
    { length: totalNodes },
    (_, index) => index + 1
  );

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

        <Text style={styles.headerTitle}>
          Select Node
        </Text>

        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* LAND INFORMATION */}

        <View style={styles.landInfoCard}>
          <View style={styles.landIcon}>
            <Ionicons
              name="map-outline"
              size={28}
              color="#2E7D32"
            />
          </View>

          <View>
            <Text style={styles.landName}>
              {landName}
            </Text>

            <Text style={styles.landDetails}>
              {area} • {totalNodes} Nodes
            </Text>
          </View>
        </View>

        {/* TITLE */}

        <View style={styles.titleSection}>
          <View style={styles.mainIcon}>
            <Ionicons
              name="grid-outline"
              size={34}
              color="#2E7D32"
            />
          </View>

          <Text style={styles.title}>
            Select Your Node
          </Text>

          <Text style={styles.subtitle}>
            Select the node where you want to capture
            and analyze the plant image.
          </Text>
        </View>

        {/* NODE GRID */}

        <View style={styles.grid}>
          {nodeList.map((node) => (
            <TouchableOpacity
              key={node}
              style={styles.nodeCard}
              activeOpacity={0.75}
              onPress={() =>
                router.push({
                    pathname: '/disease-capture',
                    params: {
                    landName,
                    nodeNumber: node.toString(),
                    },
                })
                }
            >
              <View style={styles.nodeIcon}>
                <Ionicons
                  name="location"
                  size={20}
                  color="#FFFFFF"
                />
              </View>

              <Text style={styles.nodeNumber}>
                N{node}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* INFO */}

        <View style={styles.infoBox}>
          <Ionicons
            name="information-circle-outline"
            size={22}
            color="#1565C0"
          />

          <Text style={styles.infoText}>
            Each node represents a specific area of your
            agricultural land. Select the node where the
            plant sample is located.
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
    fontSize: 18,
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

  landInfoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E5ECE5',
    marginBottom: 28,
  },

  landIcon: {
    width: 52,
    height: 52,
    borderRadius: 15,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  landName: {
    fontSize: 17,
    fontWeight: '800',
    color: '#263238',
  },

  landDetails: {
    fontSize: 12,
    color: '#78909C',
    marginTop: 5,
  },

  titleSection: {
    alignItems: 'center',
    marginBottom: 25,
  },

  mainIcon: {
    width: 72,
    height: 72,
    borderRadius: 22,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },

  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#263238',
  },

  subtitle: {
    fontSize: 13,
    color: '#78909C',
    textAlign: 'center',
    lineHeight: 20,
    marginTop: 8,
    paddingHorizontal: 15,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 25,
  },

  nodeCard: {
    width: '30%',
    aspectRatio: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E8E0',
  },

  nodeIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#2E7D32',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },

  nodeNumber: {
    fontSize: 15,
    fontWeight: '800',
    color: '#263238',
  },

  infoBox: {
    flexDirection: 'row',
    backgroundColor: '#E3F2FD',
    padding: 16,
    borderRadius: 15,
    gap: 10,
  },

  infoText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 18,
    color: '#456070',
  },
});