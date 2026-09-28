import { useRouter } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function AnalyzeScreen() {
    const router = useRouter();
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      
      {/* FIXED HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>AI Analysis</Text>
        <Text style={styles.subtitle}>
          Powered by AgriNode Intelligence
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* INTRO CARD */}
        <View style={styles.introCard}>
          <View style={styles.introIcon}>
            <Ionicons name="sparkles-outline" size={26} color="#FFFFFF" />
          </View>

          <View style={styles.introTextContainer}>
            <Text style={styles.introTitle}>
              Smart Farming Intelligence
            </Text>

            <Text style={styles.introDescription}>
              Use AI-powered tools to detect diseases, pests, and make smarter irrigation decisions.
            </Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>AI Tools</Text>

        {/* CROP DISEASE */}
        <TouchableOpacity
            style={styles.analysisCard}
            activeOpacity={0.85}
            onPress={() => router.push('/disease')}
        >
          <View
            style={[
              styles.toolIcon,
              { backgroundColor: '#E8F5E9' },
            ]}
          >
            <Ionicons name="leaf-outline" size={30} color="#2E7D32" />
          </View>

          <View style={styles.toolContent}>
            <Text style={styles.toolTitle}>
              Crop Disease Detection
            </Text>

            <Text style={styles.toolDescription}>
              Analyze crop images and identify possible diseases using AI.
            </Text>

            <View style={styles.toolTag}>
              <Ionicons name="camera-outline" size={13} color="#2E7D32" />
              <Text style={styles.toolTagText}>Image Classification</Text>
            </View>
          </View>

          <Ionicons
            name="chevron-forward"
            size={22}
            color="#90A4AE"
          />
        </TouchableOpacity>

        {/* PEST DETECTION */}
        <TouchableOpacity
            style={styles.analysisCard}
            activeOpacity={0.85}
            onPress={() => router.push('/pest')}
        >
          <View
            style={[
              styles.toolIcon,
              { backgroundColor: '#FFF3E0' },
            ]}
          >
            <Ionicons name="bug-outline" size={30} color="#EF6C00" />
          </View>

          <View style={styles.toolContent}>
            <Text style={styles.toolTitle}>
              Pest Detection
            </Text>

            <Text style={styles.toolDescription}>
              Identify harmful pests and detect pest activity using computer vision.
            </Text>

            <View
              style={[
                styles.toolTag,
                { backgroundColor: '#FFF8E1' },
              ]}
            >
              <Ionicons name="scan-outline" size={13} color="#EF6C00" />
              <Text
                style={[
                  styles.toolTagText,
                  { color: '#EF6C00' },
                ]}
              >
                Object Detection
              </Text>
            </View>
          </View>

          <Ionicons
            name="chevron-forward"
            size={22}
            color="#90A4AE"
          />
        </TouchableOpacity>

        {/* SMART IRRIGATION */}
        <TouchableOpacity
            style={styles.analysisCard}
            activeOpacity={0.85}
            onPress={() => router.push('/irrigation')}
        >
          <View
            style={[
              styles.toolIcon,
              { backgroundColor: '#E3F2FD' },
            ]}
          >
            <Ionicons name="water-outline" size={30} color="#1565C0" />
          </View>

          <View style={styles.toolContent}>
            <Text style={styles.toolTitle}>
              Smart Irrigation
            </Text>

            <Text style={styles.toolDescription}>
              Get intelligent irrigation recommendations based on farm conditions.
            </Text>

            <View
              style={[
                styles.toolTag,
                { backgroundColor: '#E3F2FD' },
              ]}
            >
              <Ionicons name="stats-chart-outline" size={13} color="#1565C0" />
              <Text
                style={[
                  styles.toolTagText,
                  { color: '#1565C0' },
                ]}
              >
                Machine Learning
              </Text>
            </View>
          </View>

          <Ionicons
            name="chevron-forward"
            size={22}
            color="#90A4AE"
          />
        </TouchableOpacity>

        {/* HOW IT WORKS */}
        <Text style={[styles.sectionTitle, { marginTop: 10 }]}>
          How It Works
        </Text>

        <View style={styles.processCard}>
          <View style={styles.processStep}>
            <View style={styles.stepIcon}>
              <Ionicons name="cloud-upload-outline" size={21} color="#1B5E20" />
            </View>
            <Text style={styles.stepText}>Input</Text>
          </View>

          <Ionicons name="arrow-forward" size={18} color="#B0BEC5" />

          <View style={styles.processStep}>
            <View style={styles.stepIcon}>
              <Ionicons name="hardware-chip-outline" size={21} color="#1B5E20" />
            </View>
            <Text style={styles.stepText}>AI Process</Text>
          </View>

          <Ionicons name="arrow-forward" size={18} color="#B0BEC5" />

          <View style={styles.processStep}>
            <View style={styles.stepIcon}>
              <Ionicons name="checkmark-circle-outline" size={21} color="#1B5E20" />
            </View>
            <Text style={styles.stepText}>Insight</Text>
          </View>
        </View>

        <View style={{ height: 25 }} />
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
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#E8EDE8',
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1B5E20',
  },

  subtitle: {
    fontSize: 14,
    color: '#607066',
    marginTop: 5,
  },

  scrollContent: {
    padding: 20,
  },

  introCard: {
    backgroundColor: '#1B5E20',
    borderRadius: 20,
    padding: 18,
    flexDirection: 'row',
    marginBottom: 28,
  },

  introIcon: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#388E3C',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  introTextContainer: {
    flex: 1,
  },

  introTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '800',
  },

  introDescription: {
    color: '#D7EED9',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 5,
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: '800',
    color: '#263238',
    marginBottom: 15,
  },

  analysisCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E8EDE8',
  },

  toolIcon: {
    width: 58,
    height: 58,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  toolContent: {
    flex: 1,
  },

  toolTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#263238',
  },

  toolDescription: {
    fontSize: 11,
    lineHeight: 16,
    color: '#78909C',
    marginTop: 4,
    marginRight: 5,
  },

  toolTag: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    marginTop: 8,
    gap: 4,
  },

  toolTagText: {
    fontSize: 10,
    color: '#2E7D32',
    fontWeight: '700',
  },

  processCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingVertical: 20,
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8EDE8',
  },

  processStep: {
    alignItems: 'center',
    flex: 1,
  },

  stepIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },

  stepText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#607D8B',
    textAlign: 'center',
  },
});