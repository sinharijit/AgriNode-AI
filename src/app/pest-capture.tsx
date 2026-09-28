import { useState } from 'react';
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

export default function PestCaptureScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const landName = String(params.landName || 'Selected Land');
  const nodeNumber = String(params.nodeNumber || '1');

  const [captured, setCaptured] = useState(false);
  const [capturing, setCapturing] = useState(false);

  const capturePhotos = () => {
    setCapturing(true);

    setTimeout(() => {
      setCapturing(false);
      setCaptured(true);
    }, 1800);
  };

  const processPhotos = () => {
    router.push({
      pathname: '/pest-processing',
      params: {
        landName,
        nodeNumber,
      },
    });
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.replace('/pest-node')}
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color="#D97706"
          />
        </TouchableOpacity>

        <View style={styles.headerText}>
          <Text style={styles.title}>Capture Pest Photos</Text>
          <Text style={styles.subtitle}>
            Camera-based node inspection
          </Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* LOCATION CARD */}
        <View style={styles.locationCard}>
          <View style={styles.locationIcon}>
            <Ionicons
              name="location"
              size={24}
              color="#EF6C00"
            />
          </View>

          <View style={styles.locationInfo}>
            <Text style={styles.locationLabel}>
              SELECTED LOCATION
            </Text>

            <Text style={styles.locationName}>
              {landName}
            </Text>

            <Text style={styles.nodeName}>
              Node N{nodeNumber}
            </Text>
          </View>

          <View style={styles.onlineBadge}>
            <View style={styles.onlineDot} />
            <Text style={styles.onlineText}>
              CAMERA ONLINE
            </Text>
          </View>
        </View>

        {/* CAMERA SYSTEM */}
        <View style={styles.cameraCard}>
          <View style={styles.cameraPreview}>
            <View style={styles.cameraCenterIcon}>
              <Ionicons
                name="videocam"
                size={42}
                color="#FFFFFF"
              />
            </View>

            <Text style={styles.previewTitle}>
              Node Camera
            </Text>

            <Text style={styles.previewSubtitle}>
              Multi-angle pest inspection system
            </Text>

            {/* CAMERA STATUS */}
            <View style={styles.liveBadge}>
              <View style={styles.liveDot} />
              <Text style={styles.liveText}>
                READY
              </Text>
            </View>
          </View>

          {/* CAMERA DESCRIPTION */}
          <View style={styles.cameraDescription}>
            <Ionicons
              name="information-circle-outline"
              size={21}
              color="#1565C0"
            />

            <Text style={styles.descriptionText}>
              The camera installed at this node captures multiple
              views of the crop area. These images are used by the
              AI pest detection system.
            </Text>
          </View>
        </View>

        {/* CAPTURE BUTTON */}
        {!captured && (
          <TouchableOpacity
            style={[
              styles.captureButton,
              capturing && styles.captureButtonActive,
            ]}
            activeOpacity={0.85}
            disabled={capturing}
            onPress={capturePhotos}
          >
            <Ionicons
              name={capturing ? 'sync' : 'camera'}
              size={25}
              color="#FFFFFF"
            />

            <Text style={styles.captureButtonText}>
              {capturing
                ? 'CAPTURING PHOTOS...'
                : 'CAPTURE MULTI-ANGLE PHOTOS'}
            </Text>
          </TouchableOpacity>
        )}

        {/* CAPTURED PHOTOS */}
        {captured && (
          <>
            <View style={styles.successCard}>
              <View style={styles.successIcon}>
                <Ionicons
                  name="checkmark"
                  size={23}
                  color="#FFFFFF"
                />
              </View>

              <View style={styles.successContent}>
                <Text style={styles.successTitle}>
                  Photos Captured Successfully
                </Text>

                <Text style={styles.successText}>
                  5 camera views captured from Node N{nodeNumber}.
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>
              Captured Views
            </Text>

            <View style={styles.viewsContainer}>
              {[
                {
                  title: 'Front View',
                  icon: 'arrow-forward-outline',
                },
                {
                  title: 'Left View',
                  icon: 'arrow-back-outline',
                },
                {
                  title: 'Right View',
                  icon: 'arrow-forward-outline',
                },
                {
                  title: 'Wide Area View',
                  icon: 'scan-outline',
                },
                {
                  title: 'Crop Detail View',
                  icon: 'leaf-outline',
                },
              ].map((view, index) => (
                <View
                  key={view.title}
                  style={styles.viewCard}
                >
                  <View style={styles.viewIcon}>
                    <Ionicons
                      name={view.icon as any}
                      size={22}
                      color="#EF6C00"
                    />
                  </View>

                  <View style={styles.viewInfo}>
                    <Text style={styles.viewTitle}>
                      {view.title}
                    </Text>

                    <Text style={styles.viewStatus}>
                      Image captured • View {index + 1}
                    </Text>
                  </View>

                  <Ionicons
                    name="checkmark-circle"
                    size={21}
                    color="#2E7D32"
                  />
                </View>
              ))}
            </View>

            {/* DATABASE FLOW */}
            <View style={styles.databaseCard}>
              <View style={styles.databaseIcon}>
                <Ionicons
                  name="cloud-upload-outline"
                  size={25}
                  color="#1565C0"
                />
              </View>

              <View style={styles.databaseContent}>
                <Text style={styles.databaseTitle}>
                  Ready for Processing
                </Text>

                <Text style={styles.databaseText}>
                  Captured images will be sent to the backend and
                  stored in the database before the AI pest detection
                  model processes them.
                </Text>
              </View>
            </View>

            {/* PROCESS BUTTON */}
            <TouchableOpacity
              style={styles.processButton}
              activeOpacity={0.85}
              onPress={processPhotos}
            >
              <Ionicons
                name="analytics-outline"
                size={24}
                color="#FFFFFF"
              />

              <Text style={styles.processButtonText}>
                PROCESS PHOTOS
              </Text>

              <Ionicons
                name="arrow-forward"
                size={20}
                color="#FFFFFF"
              />
            </TouchableOpacity>
          </>
        )}

        <View style={{ height: 35 }} />
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

  headerText: {
    flex: 1,
  },

  title: {
    fontSize: 20,
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

  locationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8EDE8',
  },

  locationIcon: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#FFF3E0',
    justifyContent: 'center',
    alignItems: 'center',
  },

  locationInfo: {
    flex: 1,
    marginLeft: 13,
  },

  locationLabel: {
    fontSize: 9,
    fontWeight: '800',
    color: '#90A4AE',
    letterSpacing: 0.7,
  },

  locationName: {
    fontSize: 16,
    fontWeight: '800',
    color: '#263238',
    marginTop: 3,
  },

  nodeName: {
    fontSize: 12,
    color: '#EF6C00',
    fontWeight: '700',
    marginTop: 2,
  },

  onlineBadge: {
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 9,
  },

  onlineDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#2E7D32',
    marginBottom: 3,
  },

  onlineText: {
    fontSize: 7,
    fontWeight: '800',
    color: '#2E7D32',
  },

  cameraCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginTop: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E8EDE8',
  },

  cameraPreview: {
    height: 245,
    backgroundColor: '#263238',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cameraCenterIcon: {
    width: 82,
    height: 82,
    borderRadius: 27,
    backgroundColor: '#37474F',
    justifyContent: 'center',
    alignItems: 'center',
  },

  previewTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
    marginTop: 13,
  },

  previewSubtitle: {
    fontSize: 11,
    color: '#CFD8DC',
    marginTop: 4,
  },

  liveBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    marginTop: 14,
  },

  liveDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#2E7D32',
    marginRight: 5,
  },

  liveText: {
    fontSize: 9,
    fontWeight: '800',
    color: '#2E7D32',
  },

  cameraDescription: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#EAF3FA',
  },

  descriptionText: {
    flex: 1,
    fontSize: 11,
    color: '#45606F',
    lineHeight: 17,
    marginLeft: 9,
  },

  captureButton: {
    height: 56,
    borderRadius: 16,
    backgroundColor: '#EF6C00',
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
  },

  captureButtonActive: {
    backgroundColor: '#C56A00',
  },

  captureButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },

  successCard: {
    backgroundColor: '#E8F5E9',
    borderRadius: 17,
    padding: 15,
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },

  successIcon: {
    width: 43,
    height: 43,
    borderRadius: 13,
    backgroundColor: '#2E7D32',
    justifyContent: 'center',
    alignItems: 'center',
  },

  successContent: {
    flex: 1,
    marginLeft: 11,
  },

  successTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#2E7D32',
  },

  successText: {
    fontSize: 11,
    color: '#4E6B52',
    marginTop: 3,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: '#263238',
    marginTop: 25,
    marginBottom: 12,
  },

  viewsContainer: {
    gap: 10,
  },

  viewCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 13,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8EDE8',
  },

  viewIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#FFF3E0',
    justifyContent: 'center',
    alignItems: 'center',
  },

  viewInfo: {
    flex: 1,
    marginLeft: 11,
  },

  viewTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#37474F',
  },

  viewStatus: {
    fontSize: 10,
    color: '#90A4AE',
    marginTop: 3,
  },

  databaseCard: {
    backgroundColor: '#EAF3FA',
    borderRadius: 17,
    padding: 15,
    marginTop: 16,
    flexDirection: 'row',
  },

  databaseIcon: {
    width: 43,
    height: 43,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  databaseContent: {
    flex: 1,
    marginLeft: 11,
  },

  databaseTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#1565C0',
  },

  databaseText: {
    fontSize: 11,
    color: '#45606F',
    lineHeight: 17,
    marginTop: 3,
  },

  processButton: {
    height: 57,
    borderRadius: 16,
    backgroundColor: '#263238',
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
  },

  processButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },
});