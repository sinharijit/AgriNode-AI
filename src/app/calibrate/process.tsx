import { SafeAreaView } from 'react-native-safe-area-context';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';

export default function ProcessScreen() {
  const [isProcessing, setIsProcessing] = useState(true);
  const [processingStep, setProcessingStep] = useState(0);

  const steps = [
    'Collecting calibration samples',
    'Analyzing soil property variations',
    'Running spatial analysis',
    'Calculating optimal node distribution',
    'Generating land structure',
  ];

  useEffect(() => {
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep += 1;

      if (currentStep < steps.length) {
        setProcessingStep(currentStep);
      } else {
        clearInterval(interval);

        setTimeout(() => {
          setIsProcessing(false);
        }, 800);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
              Process Calibration
            </Text>

            <Text style={styles.subtitle}>
              AI-powered land analysis
            </Text>
          </View>
        </View>

        {/* PROCESSING STATE */}

        {isProcessing ? (
          <View>
            <View style={styles.processingHero}>
              <View style={styles.aiCircle}>
                <Ionicons
                  name="analytics-outline"
                  size={55}
                  color="#FFFFFF"
                />
              </View>

              <Text style={styles.processingTitle}>
                Analyzing Your Land
              </Text>

              <Text style={styles.processingDescription}>
                AgriNode AI is analyzing soil and environmental
                variations across your calibration samples.
              </Text>

              <ActivityIndicator
                size="large"
                color="#1B5E20"
                style={styles.loader}
              />
            </View>

            {/* ANALYSIS STEPS */}

            <View style={styles.analysisCard}>
              <Text style={styles.analysisTitle}>
                Calibration Analysis
              </Text>

              {steps.map((step, index) => (
                <View
                  key={index}
                  style={styles.analysisRow}
                >
                  <View
                    style={[
                      styles.stepIcon,
                      index < processingStep &&
                        styles.stepCompleted,
                      index === processingStep &&
                        styles.stepCurrent,
                    ]}
                  >
                    {index < processingStep ? (
                      <Ionicons
                        name="checkmark"
                        size={16}
                        color="#FFFFFF"
                      />
                    ) : (
                      <Text
                        style={[
                          styles.stepNumber,
                          index === processingStep &&
                            styles.stepNumberActive,
                        ]}
                      >
                        {index + 1}
                      </Text>
                    )}
                  </View>

                  <Text
                    style={[
                      styles.analysisText,
                      index <= processingStep &&
                        styles.analysisTextActive,
                    ]}
                  >
                    {step}
                  </Text>

                  {index === processingStep && (
                    <ActivityIndicator
                      size="small"
                      color="#1B5E20"
                    />
                  )}
                </View>
              ))}
            </View>
          </View>
        ) : (
          <ResultsScreen />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}


/* RESULTS */

function ResultsScreen() {
  return (
    <View>
      {/* SUCCESS HERO */}

      <View style={styles.successHero}>
        <View style={styles.successIcon}>
          <Ionicons
            name="checkmark-circle"
            size={70}
            color="#1B5E20"
          />
        </View>

        <Text style={styles.successTitle}>
          Calibration Complete
        </Text>

        <Text style={styles.successDescription}>
          Your field has been successfully analyzed.
          AgriNode AI has generated an optimal node
          distribution for your land.
        </Text>
      </View>

      {/* ML ANALYSIS */}

      <View style={styles.resultCard}>
        <View style={styles.resultHeader}>
          <Ionicons
            name="hardware-chip-outline"
            size={25}
            color="#1565C0"
          />

          <Text style={styles.resultHeaderText}>
            AI Analysis Result
          </Text>
        </View>

        <View style={styles.divider} />

        <ResultRow
          icon="flask-outline"
          label="Samples Analyzed"
          value="12"
          color="#2E7D32"
        />

        <ResultRow
          icon="analytics-outline"
          label="Soil Variation"
          value="Moderate"
          color="#EF6C00"
        />

        <ResultRow
          icon="grid-outline"
          label="Recommended Nodes"
          value="16"
          color="#1565C0"
        />

        <ResultRow
          icon="resize-outline"
          label="Grid Size"
          value="25m × 25m"
          color="#6A1B9A"
        />
      </View>

      {/* WHY */}

      <View style={styles.explanationCard}>
        <Ionicons
          name="bulb-outline"
          size={25}
          color="#F9A825"
        />

        <View style={styles.explanationContent}>
          <Text style={styles.explanationTitle}>
            Why 16 Nodes?
          </Text>

          <Text style={styles.explanationText}>
            Your calibration data shows noticeable variation
            in soil nutrients and moisture across different
            areas of the field. Dividing the land into 16
            monitoring nodes will provide better precision.
          </Text>
        </View>
      </View>

      {/* LAND PREVIEW */}

      <View style={styles.previewCard}>
        <Text style={styles.previewTitle}>
          Recommended Land Grid
        </Text>

        <View style={styles.grid}>
          {[...Array(16)].map((_, index) => (
            <View
              key={index}
              style={styles.gridCell}
            >
              <Text style={styles.gridText}>
                N{index + 1}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* DIVIDE BUTTON */}

      <TouchableOpacity
        style={styles.divideButton}
        onPress={() => router.push('/calibrate/nodes')}
      >
        <Ionicons
          name="grid-outline"
          size={23}
          color="#FFFFFF"
        />

        <Text style={styles.divideButtonText}>
          DIVIDE LAND INTO NODES
        </Text>

        <Ionicons
          name="arrow-forward"
          size={21}
          color="#FFFFFF"
        />
      </TouchableOpacity>
    </View>
  );
}


/* RESULT ROW */

function ResultRow({
  icon,
  label,
  value,
  color,
}: {
  icon: any;
  label: string;
  value: string;
  color: string;
}) {
  return (
    <View style={styles.resultRow}>
      <View
        style={[
          styles.resultIconContainer,
          { backgroundColor: `${color}15` },
        ]}
      >
        <Ionicons
          name={icon}
          size={20}
          color={color}
        />
      </View>

      <Text style={styles.resultLabel}>
        {label}
      </Text>

      <Text style={[styles.resultValue, { color }]}>
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

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
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

  processingHero: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 28,
    alignItems: 'center',
    elevation: 2,
    marginBottom: 20,
  },

  aiCircle: {
    width: 105,
    height: 105,
    borderRadius: 53,
    backgroundColor: '#1B5E20',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  processingTitle: {
    fontSize: 23,
    fontWeight: '800',
    color: '#263238',
    marginBottom: 10,
  },

  processingDescription: {
    fontSize: 14,
    lineHeight: 21,
    color: '#607D8B',
    textAlign: 'center',
  },

  loader: {
    marginTop: 24,
  },

  analysisCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    elevation: 2,
  },

  analysisTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#263238',
    marginBottom: 18,
  },

  analysisRow: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 50,
  },

  stepIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#ECEFF1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 13,
  },

  stepCompleted: {
    backgroundColor: '#1B5E20',
  },

  stepCurrent: {
    backgroundColor: '#E8F5E9',
    borderWidth: 2,
    borderColor: '#1B5E20',
  },

  stepNumber: {
    fontSize: 12,
    fontWeight: '700',
    color: '#90A4AE',
  },

  stepNumberActive: {
    color: '#1B5E20',
  },

  analysisText: {
    flex: 1,
    fontSize: 14,
    color: '#90A4AE',
  },

  analysisTextActive: {
    color: '#37474F',
    fontWeight: '600',
  },

  successHero: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 28,
    alignItems: 'center',
    elevation: 2,
    marginBottom: 20,
  },

  successIcon: {
    marginBottom: 14,
  },

  successTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1B5E20',
    marginBottom: 10,
  },

  successDescription: {
    fontSize: 14,
    color: '#607D8B',
    lineHeight: 21,
    textAlign: 'center',
  },

  resultCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    elevation: 2,
    marginBottom: 18,
  },

  resultHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  resultHeaderText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#263238',
  },

  divider: {
    height: 1,
    backgroundColor: '#E8EDE8',
    marginVertical: 15,
  },

  resultRow: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 52,
  },

  resultIconContainer: {
    width: 38,
    height: 38,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  resultLabel: {
    flex: 1,
    fontSize: 14,
    color: '#607D8B',
  },

  resultValue: {
    fontSize: 15,
    fontWeight: '800',
  },

  explanationCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF8E1',
    borderRadius: 18,
    padding: 17,
    gap: 12,
    marginBottom: 20,
  },

  explanationContent: {
    flex: 1,
  },

  explanationTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#6D5A00',
    marginBottom: 5,
  },

  explanationText: {
    fontSize: 13,
    lineHeight: 19,
    color: '#6D5A00',
  },

  previewCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    elevation: 2,
    marginBottom: 24,
  },

  previewTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#263238',
    marginBottom: 18,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 1,
    borderColor: '#1B5E20',
  },

  gridCell: {
    width: '25%',
    aspectRatio: 1,
    borderWidth: 0.5,
    borderColor: '#1B5E20',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F8E9',
  },

  gridText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1B5E20',
  },

  divideButton: {
    height: 60,
    backgroundColor: '#1565C0',
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    elevation: 3,
  },

  divideButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0.3,
  },

});