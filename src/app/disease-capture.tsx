import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';

export default function DiseaseCaptureScreen() {
  const router = useRouter();

  const { landName, nodeNumber } = useLocalSearchParams<{
    landName: string;
    nodeNumber: string;
  }>();

  const [captured, setCaptured] = useState(false);
  const [capturing, setCapturing] = useState(false);

  const handleCapture = () => {
    setCapturing(true);

    setTimeout(() => {
      setCapturing(false);
      setCaptured(true);
    }, 1800);
  };

  const handleProcess = () => {
    router.push({
      pathname: '/disease-processing',
      params: {
        landName,
        nodeNumber,
      },
    });
  };

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
          Capture Plant Images
        </Text>

        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* SELECTED LOCATION */}

        <View style={styles.locationCard}>
          <View style={styles.locationIcon}>
            <Ionicons
              name="location-outline"
              size={24}
              color="#2E7D32"
            />
          </View>

          <View>
            <Text style={styles.landName}>
              {landName || 'Selected Land'}
            </Text>

            <Text style={styles.nodeText}>
              Node {nodeNumber || '1'}
            </Text>
          </View>
        </View>

        {/* CAMERA AREA */}

        <View style={styles.cameraSection}>
          <View style={styles.cameraPreview}>
            <Ionicons
              name={captured ? 'checkmark-circle' : 'camera-outline'}
              size={75}
              color={captured ? '#2E7D32' : '#78909C'}
            />

            <Text style={styles.cameraTitle}>
              {captured
                ? 'Images Captured Successfully'
                : 'Node Camera Ready'}
            </Text>

            <Text style={styles.cameraSubtitle}>
              {captured
                ? 'Plant images from multiple angles are ready for processing.'
                : 'The camera attached to this agricultural node will capture a 180° view of the surrounding plants.'}
            </Text>
          </View>
        </View>

        {/* INFORMATION */}

        {!captured && (
          <View style={styles.infoCard}>
            <View style={styles.infoHeader}>
              <Ionicons
                name="scan-outline"
                size={24}
                color="#1565C0"
              />

              <Text style={styles.infoTitle}>
                180° Plant Capture
              </Text>
            </View>

            <Text style={styles.infoText}>
              The node camera captures multiple views of plants around
              this location to provide better disease detection accuracy.
            </Text>

            <View style={styles.captureList}>
              <CaptureItem text="Front plant view" />
              <CaptureItem text="Left-side view" />
              <CaptureItem text="Right-side view" />
              <CaptureItem text="Wide area view" />
              <CaptureItem text="Additional detailed plant view" />
            </View>
          </View>
        )}

        {/* CAPTURE RESULTS */}

        {captured && (
          <View style={styles.successCard}>
            <Text style={styles.successTitle}>
              Capture Summary
            </Text>

            <CaptureResult
              label="Front View"
              status="Captured"
            />

            <CaptureResult
              label="Left View"
              status="Captured"
            />

            <CaptureResult
              label="Right View"
              status="Captured"
            />

            <CaptureResult
              label="Wide Area View"
              status="Captured"
            />

            <CaptureResult
              label="Plant Detail View"
              status="Captured"
            />
          </View>
        )}

        {/* BUTTON */}

        {!captured ? (
          <TouchableOpacity
            style={[
              styles.captureButton,
              capturing && styles.disabledButton,
            ]}
            onPress={handleCapture}
            disabled={capturing}
          >
            <Ionicons
              name={
                capturing
                  ? 'sync-outline'
                  : 'camera-outline'
              }
              size={22}
              color="#FFFFFF"
            />

            <Text style={styles.buttonText}>
              {capturing
                ? 'CAPTURING IMAGES...'
                : 'CAPTURE 180° PHOTOS'}
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.processButton}
            onPress={handleProcess}
          >
            <Ionicons
              name="analytics-outline"
              size={22}
              color="#FFFFFF"
            />

            <Text style={styles.buttonText}>
              PROCESS PHOTOS
            </Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

function CaptureItem({ text }: { text: string }) {
  return (
    <View style={styles.captureItem}>
      <Ionicons
        name="checkmark-circle"
        size={18}
        color="#2E7D32"
      />

      <Text style={styles.captureItemText}>
        {text}
      </Text>
    </View>
  );
}

function CaptureResult({
  label,
  status,
}: {
  label: string;
  status: string;
}) {
  return (
    <View style={styles.resultRow}>
      <View style={styles.resultLeft}>
        <Ionicons
          name="image-outline"
          size={20}
          color="#2E7D32"
        />

        <Text style={styles.resultLabel}>
          {label}
        </Text>
      </View>

      <View style={styles.statusBadge}>
        <Ionicons
          name="checkmark"
          size={14}
          color="#2E7D32"
        />

        <Text style={styles.statusText}>
          {status}
        </Text>
      </View>
    </View>
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

  locationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2EAE2',
    marginBottom: 25,
  },

  locationIcon: {
    width: 50,
    height: 50,
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

  nodeText: {
    fontSize: 13,
    color: '#78909C',
    marginTop: 4,
  },

  cameraSection: {
    alignItems: 'center',
    marginBottom: 25,
  },

  cameraPreview: {
    width: '100%',
    minHeight: 245,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#E2EAE2',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },

  cameraTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#263238',
    marginTop: 16,
  },

  cameraSubtitle: {
    fontSize: 13,
    color: '#78909C',
    textAlign: 'center',
    lineHeight: 20,
    marginTop: 9,
  },

  infoCard: {
    backgroundColor: '#EAF4FF',
    borderRadius: 18,
    padding: 18,
    marginBottom: 25,
  },

  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    marginBottom: 10,
  },

  infoTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#263238',
  },

  infoText: {
    fontSize: 12,
    lineHeight: 19,
    color: '#526B7A',
  },

  captureList: {
    marginTop: 15,
    gap: 9,
  },

  captureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },

  captureItemText: {
    fontSize: 12,
    color: '#455A64',
  },

  successCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: '#DDE8DD',
    marginBottom: 25,
  },

  successTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#263238',
    marginBottom: 15,
  },

  resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEF2EE',
  },

  resultLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  resultLabel: {
    fontSize: 13,
    color: '#37474F',
    fontWeight: '600',
  },

  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 10,
  },

  statusText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#2E7D32',
  },

  captureButton: {
    backgroundColor: '#1B5E20',
    minHeight: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },

  processButton: {
    backgroundColor: '#1565C0',
    minHeight: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },

  disabledButton: {
    opacity: 0.7,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },
});