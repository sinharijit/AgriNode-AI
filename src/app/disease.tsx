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

export default function DiseaseScreen() {
  const router = useRouter();

  const lands = [
    {
      id: '1',
      name: 'North Field',
      area: '2 Acres',
      nodes: 16,
    },
    {
      id: '2',
      name: 'Home Farm',
      area: '1.5 Acres',
      nodes: 9,
    },
    {
      id: '3',
      name: 'Rice Field',
      area: '3 Acres',
      nodes: 12,
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
          Plant Disease Detection
        </Text>

        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* TOP SECTION */}
        <View style={styles.titleSection}>
          <View style={styles.mainIcon}>
            <Ionicons
              name="leaf-outline"
              size={36}
              color="#2E7D32"
            />
          </View>

          <Text style={styles.title}>
            Select Your Land
          </Text>

          <Text style={styles.subtitle}>
            Choose the land where you want to perform plant
            disease detection.
          </Text>
        </View>

        {/* LAND LIST */}
        <View style={styles.landList}>
          {lands.map((land) => (
            <TouchableOpacity
              key={land.id}
              style={styles.landCard}
              activeOpacity={0.8}
              onPress={() =>
                router.push({
                  pathname: '/disease-node',
                  params: {
                    landId: land.id,
                    landName: land.name,
                    area: land.area,
                    nodes: land.nodes.toString(),
                  },
                })
              }
            >
              <View style={styles.landIcon}>
                <Ionicons
                  name="map-outline"
                  size={25}
                  color="#2E7D32"
                />
              </View>

              <View style={styles.landInfo}>
                <Text style={styles.landName}>
                  {land.name}
                </Text>

                <Text style={styles.landArea}>
                  Area: {land.area}
                </Text>

                <Text style={styles.landNodes}>
                  Nodes: {land.nodes}
                </Text>
              </View>

              <Ionicons
                name="chevron-forward"
                size={22}
                color="#90A4AE"
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* INFO BOX */}
        <View style={styles.infoBox}>
          <Ionicons
            name="information-circle-outline"
            size={22}
            color="#1565C0"
          />

          <Text style={styles.infoText}>
            After selecting your land, you will choose the
            specific node where the plant image will be analyzed.
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

  titleSection: {
    alignItems: 'center',
    marginBottom: 28,
  },

  mainIcon: {
    width: 78,
    height: 78,
    borderRadius: 24,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },

  title: {
    fontSize: 25,
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

  landList: {
    gap: 12,
  },

  landCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    padding: 17,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5ECE5',
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

  landInfo: {
    flex: 1,
  },

  landName: {
    fontSize: 16,
    fontWeight: '800',
    color: '#263238',
  },

  landArea: {
    fontSize: 12,
    color: '#607066',
    marginTop: 5,
  },

  landNodes: {
    fontSize: 12,
    color: '#78909C',
    marginTop: 2,
  },

  infoBox: {
    flexDirection: 'row',
    backgroundColor: '#E3F2FD',
    padding: 16,
    borderRadius: 15,
    marginTop: 25,
    gap: 10,
  },

  infoText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 18,
    color: '#456070',
  },
});