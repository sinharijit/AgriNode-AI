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
import { useState } from 'react';

type Sample = {
  id: number;
  nitrogen: number;
  phosphorus: number;
  potassium: number;
  ph: number;
  ec: number;
  moisture: number;
  temperature: number;
  humidity: number;
};

export default function SamplingScreen() {
  const [samples, setSamples] = useState<Sample[]>([]);

  const generateSample = (): Sample => {
    const sampleNumber = samples.length + 1;

    return {
      id: sampleNumber,
      nitrogen: Math.floor(Math.random() * 30) + 35,
      phosphorus: Math.floor(Math.random() * 20) + 20,
      potassium: Math.floor(Math.random() * 50) + 90,
      ph: Number((Math.random() * 1.2 + 6.0).toFixed(1)),
      ec: Number((Math.random() * 0.8 + 0.8).toFixed(1)),
      moisture: Math.floor(Math.random() * 20) + 28,
      temperature: Math.floor(Math.random() * 6) + 27,
      humidity: Math.floor(Math.random() * 15) + 65,
    };
  };

  const takeSample = () => {
    const newSample = generateSample();

    setSamples((previousSamples) => [
      ...previousSamples,
      newSample,
    ]);
  };

  const processLand = () => {
    if (samples.length < 10) {
      Alert.alert(
        'More Samples Needed',
        `Please collect at least 10 samples. Currently collected: ${samples.length}`,
      );
      return;
    }

    router.push('/calibrate/process');
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
              Collect Samples
            </Text>

            <Text style={styles.subtitle}>
              Initial Land Calibration
            </Text>
          </View>
        </View>

        {/* PROGRESS */}

        <View style={styles.progressContainer}>
          <View style={styles.progressActive} />
          <View style={styles.progressActive} />
          <View style={styles.progressInactive} />
        </View>

        <Text style={styles.stepText}>
          STEP 2 OF 3
        </Text>

        {/* SAMPLE STATUS */}

        <View style={styles.statusCard}>
          <View style={styles.statusIcon}>
            <Ionicons
              name="flask"
              size={30}
              color="#1B5E20"
            />
          </View>

          <View style={styles.statusTextContainer}>
            <Text style={styles.statusTitle}>
              Samples Collected
            </Text>

            <Text style={styles.statusDescription}>
              Collect 10–15 samples across your field
            </Text>
          </View>

          <Text style={styles.sampleCount}>
            {samples.length}
          </Text>
        </View>

        {/* SAMPLE PROGRESS */}

        <View style={styles.sampleProgressContainer}>
          <View
            style={[
              styles.sampleProgressBar,
              {
                width: `${Math.min(
                  (samples.length / 10) * 100,
                  100,
                )}%`,
              },
            ]}
          />
        </View>

        <Text style={styles.progressText}>
          {samples.length < 10
            ? `${10 - samples.length} more sample${
                10 - samples.length === 1 ? '' : 's'
              } needed`
            : 'Minimum samples collected ✓'}
        </Text>

        {/* SENSOR INFO */}

        <View style={styles.sensorCard}>
          <View style={styles.sensorHeader}>
            <Ionicons
              name="hardware-chip-outline"
              size={24}
              color="#1565C0"
            />

            <Text style={styles.sensorTitle}>
              Hardware Sensor Data
            </Text>
          </View>

          <Text style={styles.sensorDescription}>
            Press TAKE SAMPLE to simulate data received from
            the AgriNode hardware device.
          </Text>

          <View style={styles.dataGrid}>
            <DataItem label="Nitrogen" value="N" />
            <DataItem label="Phosphorus" value="P" />
            <DataItem label="Potassium" value="K" />
            <DataItem label="pH" value="pH" />
            <DataItem label="EC" value="EC" />
            <DataItem label="Moisture" value="%" />
            <DataItem label="Temperature" value="°C" />
            <DataItem label="Humidity" value="%" />
          </View>
        </View>

        {/* TAKE SAMPLE BUTTON */}

        <TouchableOpacity
          style={styles.takeSampleButton}
          onPress={takeSample}
        >
          <Ionicons
            name="add-circle-outline"
            size={24}
            color="#FFFFFF"
          />

          <Text style={styles.takeSampleText}>
            TAKE SAMPLE
          </Text>
        </TouchableOpacity>

        {/* SAMPLE TABLE */}

        {samples.length > 0 && (
          <>
            <View style={styles.tableHeaderContainer}>
              <Text style={styles.tableTitle}>
                Collected Samples
              </Text>

              <Text style={styles.tableCount}>
                {samples.length} Sample
                {samples.length > 1 ? 's' : ''}
              </Text>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.horizontalScroll}
            >
              <View style={styles.table}>
                {/* TABLE HEADER */}

                <View style={styles.tableHeader}>
                  <TableCell text="Sample" header />
                  <TableCell text="N" header />
                  <TableCell text="P" header />
                  <TableCell text="K" header />
                  <TableCell text="pH" header />
                  <TableCell text="EC" header />
                  <TableCell text="Moist." header />
                  <TableCell text="Temp." header />
                  <TableCell text="Humidity" header />
                </View>

                {/* TABLE ROWS */}

                {samples.map((sample) => (
                  <View
                    key={sample.id}
                    style={styles.tableRow}
                  >
                    <TableCell
                      text={`S${sample.id}`}
                    />

                    <TableCell
                      text={sample.nitrogen.toString()}
                    />

                    <TableCell
                      text={sample.phosphorus.toString()}
                    />

                    <TableCell
                      text={sample.potassium.toString()}
                    />

                    <TableCell
                      text={sample.ph.toString()}
                    />

                    <TableCell
                      text={sample.ec.toString()}
                    />

                    <TableCell
                      text={`${sample.moisture}%`}
                    />

                    <TableCell
                      text={`${sample.temperature}°`}
                    />

                    <TableCell
                      text={`${sample.humidity}%`}
                    />
                  </View>
                ))}
              </View>
            </ScrollView>
          </>
        )}

        {/* PROCESS LAND */}

        <TouchableOpacity
          style={[
            styles.processButton,
            samples.length < 10 && styles.processButtonDisabled,
          ]}
          onPress={processLand}
        >
          <Ionicons
            name="analytics-outline"
            size={23}
            color="#FFFFFF"
          />

          <Text style={styles.processButtonText}>
            PROCESS LAND
          </Text>

          <Ionicons
            name="arrow-forward"
            size={22}
            color="#FFFFFF"
          />
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}


/* DATA ITEM */

function DataItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <View style={styles.dataItem}>
      <Text style={styles.dataLabel}>
        {label}
      </Text>

      <Text style={styles.dataValue}>
        {value}
      </Text>
    </View>
  );
}


/* TABLE CELL */

function TableCell({
  text,
  header = false,
}: {
  text: string;
  header?: boolean;
}) {
  return (
    <View
      style={[
        styles.tableCell,
        header && styles.tableHeaderCell,
      ]}
    >
      <Text
        style={[
          styles.tableCellText,
          header && styles.tableHeaderText,
        ]}
      >
        {text}
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
    paddingBottom: 45,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },

  backButton: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
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

  progressContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 10,
  },

  progressActive: {
    flex: 1,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#1B5E20',
  },

  progressInactive: {
    flex: 1,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#DDE5DD',
  },

  stepText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#1B5E20',
    letterSpacing: 1,
    marginBottom: 22,
  },

  statusCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },

  statusIcon: {
    width: 55,
    height: 55,
    borderRadius: 16,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  statusTextContainer: {
    flex: 1,
  },

  statusTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#263238',
  },

  statusDescription: {
    fontSize: 12,
    color: '#78909C',
    marginTop: 4,
  },

  sampleCount: {
    fontSize: 32,
    fontWeight: '800',
    color: '#1B5E20',
  },

  sampleProgressContainer: {
    height: 8,
    backgroundColor: '#DDE5DD',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 18,
  },

  sampleProgressBar: {
    height: '100%',
    backgroundColor: '#1B5E20',
    borderRadius: 10,
  },

  progressText: {
    fontSize: 12,
    color: '#607D8B',
    textAlign: 'right',
    marginTop: 7,
    marginBottom: 22,
  },

  sensorCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    elevation: 2,
    marginBottom: 20,
  },

  sensorHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },

  sensorTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#263238',
  },

  sensorDescription: {
    fontSize: 13,
    color: '#607D8B',
    lineHeight: 19,
    marginBottom: 18,
  },

  dataGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },

  dataItem: {
    width: '22%',
    minHeight: 58,
    backgroundColor: '#F5F8F5',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  dataLabel: {
    fontSize: 10,
    color: '#78909C',
    textAlign: 'center',
  },

  dataValue: {
    fontSize: 13,
    fontWeight: '800',
    color: '#1B5E20',
    marginTop: 4,
  },

  takeSampleButton: {
    height: 58,
    backgroundColor: '#1B5E20',
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    elevation: 3,
    marginBottom: 28,
  },

  takeSampleText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 0.5,
  },

  tableHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },

  tableTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#263238',
  },

  tableCount: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1B5E20',
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },

  horizontalScroll: {
    marginBottom: 25,
  },

  table: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 2,
  },

  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#1B5E20',
  },

  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E8EDE8',
  },

  tableCell: {
    width: 72,
    minHeight: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: '#E8EDE8',
  },

  tableHeaderCell: {
    borderRightColor: '#2E7D32',
  },

  tableCellText: {
    fontSize: 12,
    color: '#37474F',
    fontWeight: '600',
  },

  tableHeaderText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 11,
  },

  processButton: {
    height: 60,
    backgroundColor: '#1565C0',
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    elevation: 3,
  },

  processButtonDisabled: {
    backgroundColor: '#90A4AE',
  },

  processButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 0.5,
  },

});