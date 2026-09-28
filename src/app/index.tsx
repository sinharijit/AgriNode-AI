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

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* FIXED APP HEADER */}

        <View style={styles.fixedHeader}>

          <View style={styles.headerLeft}>
            <Text style={styles.logo}>AgriNode AI</Text>

            <Text style={styles.tagline}>
              Precision Farming, Node by Node
            </Text>
          </View>

          <TouchableOpacity style={styles.notificationButton}>
            <Ionicons
              name="notifications-outline"
              size={24}
              color="#1B5E20"
            />

            <View style={styles.notificationDot} />
          </TouchableOpacity>

        </View>

        {/* SCROLLABLE DASHBOARD */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >

        {/* Greeting */}
        <View style={styles.greetingSection}>
          <Text style={styles.greeting}>Good Afternoon 👋</Text>
          <Text style={styles.greetingSubtext}>
            Here is what is happening across your farm today.
          </Text>
        </View>

        {/* Weather Card */}
        <TouchableOpacity
          style={styles.weatherCard}
          activeOpacity={0.85}
        >
          <View>
            <View style={styles.weatherTop}>
              <Ionicons name="sunny-outline" size={28} color="#FFFFFF" />
              <Text style={styles.weatherLocation}>Durgapur, West Bengal</Text>
            </View>

            <Text style={styles.temperature}>28°C</Text>
            <Text style={styles.weatherCondition}>Partly Cloudy</Text>

            <View style={styles.weatherStats}>
              <View>
                <Text style={styles.weatherStatLabel}>Humidity</Text>
                <Text style={styles.weatherStatValue}>68%</Text>
              </View>

              <View>
                <Text style={styles.weatherStatLabel}>Rain Chance</Text>
                <Text style={styles.weatherStatValue}>20%</Text>
              </View>

              <View>
                <Text style={styles.weatherStatLabel}>Wind</Text>
                <Text style={styles.weatherStatValue}>12 km/h</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        {/* Calibrate Land Button */}
        <TouchableOpacity
          style={styles.calibrateButton}
          activeOpacity={0.85}
          onPress={() => router.push('/calibrate')}
        >
          <View style={styles.calibrateIcon}>
            <Ionicons name="add" size={25} color="#FFFFFF" />
          </View>

          <View style={styles.calibrateContent}>
            <Text style={styles.calibrateTitle}>Calibrate Your Land</Text>
            <Text style={styles.calibrateSubtitle}>
              Create intelligent nodes for precise farming
            </Text>
          </View>

          <Ionicons
            name="arrow-forward"
            size={22}
            color="#FFFFFF"
          />
        </TouchableOpacity>

        {/* Quick Actions */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
        </View>

        <View style={styles.quickActions}>
          <TouchableOpacity
            style={styles.quickCard}
            onPress={() => router.push('/lands')}
          >
            <View style={[styles.quickIcon, { backgroundColor: '#E8F5E9' }]}>
              <Ionicons name="map-outline" size={24} color="#2E7D32" />
            </View>
            <Text style={styles.quickTitle}>My Lands</Text>
            <Text style={styles.quickSubtitle}>View your fields</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickCard}
            onPress={() => router.push('/crop-analysis')}
          >
            <View style={[styles.quickIcon, { backgroundColor: '#E3F2FD' }]}>
              <Ionicons name="bar-chart-outline" size={24} color="#1565C0" />
            </View>

            <Text style={styles.quickTitle}>Crop Result</Text>
            <Text style={styles.quickSubtitle}>Check crop suitability</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickCard}
            onPress={() => router.push('/land-profile')}
          >
            <View style={[styles.quickIcon, { backgroundColor: '#E3F2FD' }]}>
              <Ionicons name="folder-open-outline" size={24} color="#7B1FA2"/>
            </View>

            <Text style={styles.quickTitle}>Land Profile</Text>
            <Text style={styles.quickSubtitle}>View previous crop analyses and recommendations</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickCard}
            onPress={() => router.push('/disease')}
          >
            <View style={[styles.quickIcon, { backgroundColor: '#FFF3E0' }]}>
              <Ionicons name="leaf-outline" size={24} color="#EF6C00" />
            </View>
            <Text style={styles.quickTitle}>Plant Disease</Text>
            <Text style={styles.quickSubtitle}>Detect crop diseases</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8F6',
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 35,
  },

  notificationButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F1F8F2',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
    position: 'relative',
  },

  notificationDot: {
    position: 'absolute',
    top: 9,
    right: 10,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E53935',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  fixedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 24,
    paddingTop: 14,
    paddingBottom: 14,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E8EDE8',
  },

  headerLeft: {
    flex: 1,
  },

  logo: {
    fontSize: 25,
    fontWeight: '800',
    color: '#1B5E20',
    letterSpacing: -0.5,
  },

  tagline: {
    fontSize: 12,
    color: '#78909C',
    marginTop: 2,
  },

  greetingSection: {
    marginTop: 30,
    marginBottom: 22,
  },

  greeting: {
    fontSize: 26,
    fontWeight: '800',
    color: '#263238',
  },

  greetingSubtext: {
    fontSize: 13,
    color: '#78909C',
    marginTop: 5,
  },

  weatherCard: {
    backgroundColor: '#2E7D32',
    borderRadius: 22,
    padding: 20,
    marginBottom: 28,
  },

  weatherTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  weatherLocation: {
    color: '#E8F5E9',
    fontSize: 13,
  },

  temperature: {
    color: '#FFFFFF',
    fontSize: 42,
    fontWeight: '800',
    marginTop: 15,
  },

  weatherCondition: {
    color: '#E8F5E9',
    fontSize: 14,
  },

  weatherStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 22,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.2)',
  },

  weatherStatLabel: {
    color: '#C8E6C9',
    fontSize: 10,
  },

  weatherStatValue: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    marginTop: 3,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#263238',
  },

  overviewContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 14,
    marginBottom: 22,
  },

  overviewCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },

  overviewNumber: {
    fontSize: 20,
    fontWeight: '800',
    color: '#263238',
    marginTop: 6,
  },

  overviewLabel: {
    fontSize: 10,
    color: '#78909C',
    marginTop: 3,
    textAlign: 'center',
  },

  calibrateButton: {
    backgroundColor: '#1B5E20',
    borderRadius: 18,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
  },

  calibrateIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#388E3C',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  calibrateContent: {
    flex: 1,
  },

  calibrateTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },

  calibrateSubtitle: {
    color: '#C8E6C9',
    fontSize: 11,
    marginTop: 3,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },

  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 28,
  },

  quickCard: {
    width: '31%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    minHeight: 135,
  },

  quickIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  quickTitle: {
    fontSize: 12,
    fontWeight: '800',
    color: '#263238',
  },

  quickSubtitle: {
    fontSize: 10,
    color: '#78909C',
    marginTop: 4,
    lineHeight: 14,
  },

  viewAll: {
    fontSize: 12,
    fontWeight: '700',
    color: '#2E7D32',
  },

  alertCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  alertIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  alertContent: {
    flex: 1,
  },

  alertTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#263238',
  },

  alertDescription: {
    fontSize: 11,
    color: '#78909C',
    marginTop: 3,
  },
});