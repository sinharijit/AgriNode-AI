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

export default function PestScreen() {
  const router = useRouter();

  const lands = [
    {
      id: 'north-field',
      name: 'North Field',
      area: '2 Acres',
      nodes: 16,
    },
    {
      id: 'home-farm',
      name: 'Home Farm',
      area: '1.5 Acres',
      nodes: 9,
    },
    {
      id: 'rice-field',
      name: 'Rice Field',
      area: '3 Acres',
      nodes: 12,
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.replace('/analyze')}
        >
          <Ionicons name="arrow-back" size={24} color="#D97706" />
        </TouchableOpacity>

        <View>
          <Text style={styles.title}>Pest Detection</Text>
          <Text style={styles.subtitle}>
            AI-powered pest identification
          </Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* INTRO */}
        <View style={styles.introCard}>
          <View style={styles.iconCircle}>
            <Ionicons name="bug-outline" size={34} color="#EF6C00" />
          </View>

          <Text style={styles.introTitle}>
            Select Your Land
          </Text>

          <Text style={styles.introText}>
            Choose the agricultural land where you want to detect pests.
            After selecting a land, you can choose a specific node for
            camera-based pest detection.
          </Text>
        </View>

        {/* LAND LIST */}
        <Text style={styles.sectionTitle}>
          Your Lands
        </Text>

        {lands.map((land) => (
          <TouchableOpacity
            key={land.id}
            style={styles.landCard}
            activeOpacity={0.85}
            onPress={() =>
              router.push({
                pathname: '/pest-node',
                params: {
                  landId: land.id,
                  landName: land.name,
                  area: land.area,
                  nodes: land.nodes.toString(),
                },
              })
            }
          >
            {/* LAND ICON */}
            <View style={styles.landIcon}>
              <Ionicons
                name="map-outline"
                size={28}
                color="#EF6C00"
              />
            </View>

            {/* LAND INFORMATION */}
            <View style={styles.landInfo}>
              <Text style={styles.landName}>
                {land.name}
              </Text>

              <View style={styles.landMetaRow}>
                <View style={styles.metaItem}>
                  <Ionicons
                    name="resize-outline"
                    size={15}
                    color="#78909C"
                  />
                  <Text style={styles.metaText}>
                    {land.area}
                  </Text>
                </View>

                <View style={styles.metaItem}>
                  <Ionicons
                    name="grid-outline"
                    size={15}
                    color="#78909C"
                  />
                  <Text style={styles.metaText}>
                    {land.nodes} Nodes
                  </Text>
                </View>
              </View>
            </View>

            {/* ARROW */}
            <View style={styles.arrowButton}>
              <Ionicons
                name="chevron-forward"
                size={20}
                color="#EF6C00"
              />
            </View>
          </TouchableOpacity>
        ))}

        {/* INFORMATION */}
        <View style={styles.infoCard}>
          <View style={styles.infoIcon}>
            <Ionicons
              name="information-circle-outline"
              size={22}
              color="#1565C0"
            />
          </View>

          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>
              Node-Based Pest Detection
            </Text>

            <Text style={styles.infoText}>
              Cameras installed at individual field nodes capture
              multiple views of the crops. The images are sent to
              the database and processed by the AI pest detection
              model.
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

  introCard: {
    backgroundColor: '#FFF3E0',
    borderRadius: 22,
    padding: 24,
    alignItems: 'center',
    marginBottom: 26,
  },

  iconCircle: {
    width: 70,
    height: 70,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },

  introTitle: {
    fontSize: 21,
    fontWeight: '800',
    color: '#263238',
  },

  introText: {
    fontSize: 13,
    color: '#795548',
    textAlign: 'center',
    lineHeight: 19,
    marginTop: 7,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#263238',
    marginBottom: 14,
  },

  landCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8EDE8',
  },

  landIcon: {
    width: 54,
    height: 54,
    borderRadius: 16,
    backgroundColor: '#FFF3E0',
    justifyContent: 'center',
    alignItems: 'center',
  },

  landInfo: {
    flex: 1,
    marginLeft: 14,
  },

  landName: {
    fontSize: 16,
    fontWeight: '800',
    color: '#263238',
  },

  landMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
    gap: 14,
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

  arrowButton: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#FFF8E1',
    justifyContent: 'center',
    alignItems: 'center',
  },

  infoCard: {
    backgroundColor: '#EAF3FA',
    borderRadius: 18,
    padding: 16,
    marginTop: 12,
    flexDirection: 'row',
  },

  infoIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  infoContent: {
    flex: 1,
    marginLeft: 11,
  },

  infoTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#1565C0',
  },

  infoText: {
    fontSize: 11,
    color: '#45606F',
    lineHeight: 17,
    marginTop: 4,
  },
});