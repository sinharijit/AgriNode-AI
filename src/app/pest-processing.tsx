import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';

type ProcessingStep = {
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
};

const processingSteps: ProcessingStep[] = [
  {
    title: 'Uploading captured images',
    description: 'Sending node camera images to the backend.',
    icon: 'cloud-upload-outline',
  },
  {
    title: 'Storing images in database',
    description: 'Saving all captured views for the selected node.',
    icon: 'server-outline',
  },
  {
    title: 'ML model fetching images',
    description: 'The pest detection model is retrieving the stored images.',
    icon: 'download-outline',
  },
  {
    title: 'Analyzing crop images',
    description: 'AI is examining the captured crop and leaf patterns.',
    icon: 'scan-outline',
  },
  {
    title: 'Detecting possible pests',
    description: 'The model is identifying pest species and activity.',
    icon: 'bug-outline',
  },
  {
    title: 'Calculating detection confidence',
    description: 'AI is calculating the confidence of the prediction.',
    icon: 'analytics-outline',
  },
  {
    title: 'Saving analysis result',
    description: 'The final pest detection result is being stored.',
    icon: 'cloud-done-outline',
  },
];

export default function PestProcessingScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const landName = String(params.landName || 'Selected Land');
  const nodeNumber = String(params.nodeNumber || '1');

  const [currentStep, setCurrentStep] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (currentStep >= processingSteps.length) {
      setCompleted(true);

      const timer = setTimeout(() => {
        router.replace({
          pathname: '/pest-result',
          params: {
            landName,
            nodeNumber,
          },
        });
      }, 900);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setCurrentStep((previous) => previous + 1);
    }, 1100);

    return () => clearTimeout(timer);
  }, [currentStep]);

  const progress = Math.min(
    currentStep / processingSteps.length,
    1
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* TOP ICON */}
        <View style={styles.mainIcon}>
          {completed ? (
            <Ionicons
              name="checkmark"
              size={42}
              color="#FFFFFF"
            />
          ) : (
            <ActivityIndicator
              size="large"
              color="#FFFFFF"
            />
          )}
        </View>

        {/* TITLE */}
        <Text style={styles.title}>
          {completed
            ? 'Analysis Complete'
            : 'Processing Pest Detection'}
        </Text>

        <Text style={styles.subtitle}>
          {landName} • Node N{nodeNumber}
        </Text>

        {/* PROGRESS */}
        <View style={styles.progressContainer}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressLabel}>
              AI Processing
            </Text>

            <Text style={styles.progressValue}>
              {Math.round(progress * 100)}%
            </Text>
          </View>

          <View style={styles.progressBackground}>
            <View
              style={[
                styles.progressFill,
                { width: `${progress * 100}%` },
              ]}
            />
          </View>
        </View>

        {/* PIPELINE */}
        <View style={styles.pipelineCard}>
          <Text style={styles.pipelineTitle}>
            Detection Pipeline
          </Text>

          {processingSteps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isCurrent = index === currentStep && !completed;

            return (
              <View
                key={step.title}
                style={styles.stepRow}
              >
                {/* STEP ICON */}
                <View
                  style={[
                    styles.stepIcon,
                    isCompleted && styles.stepIconCompleted,
                    isCurrent && styles.stepIconCurrent,
                  ]}
                >
                  {isCompleted ? (
                    <Ionicons
                      name="checkmark"
                      size={18}
                      color="#FFFFFF"
                    />
                  ) : isCurrent ? (
                    <ActivityIndicator
                      size="small"
                      color="#FFFFFF"
                    />
                  ) : (
                    <Ionicons
                      name={step.icon}
                      size={18}
                      color="#90A4AE"
                    />
                  )}
                </View>

                {/* STEP TEXT */}
                <View style={styles.stepContent}>
                  <Text
                    style={[
                      styles.stepTitle,
                      isCompleted && styles.stepTitleCompleted,
                      isCurrent && styles.stepTitleCurrent,
                    ]}
                  >
                    {step.title}
                  </Text>

                  <Text style={styles.stepDescription}>
                    {step.description}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>

        {/* DATABASE / ML FLOW */}
        <View style={styles.flowCard}>
          <View style={styles.flowItem}>
            <Ionicons
              name="videocam-outline"
              size={20}
              color="#EF6C00"
            />
            <Text style={styles.flowText}>
              Camera
            </Text>
          </View>

          <Ionicons
            name="arrow-forward"
            size={16}
            color="#90A4AE"
          />

          <View style={styles.flowItem}>
            <Ionicons
              name="server-outline"
              size={20}
              color="#1565C0"
            />
            <Text style={styles.flowText}>
              Database
            </Text>
          </View>

          <Ionicons
            name="arrow-forward"
            size={16}
            color="#90A4AE"
          />

          <View style={styles.flowItem}>
            <Ionicons
              name="hardware-chip-outline"
              size={20}
              color="#7B1FA2"
            />
            <Text style={styles.flowText}>
              ML
            </Text>
          </View>

          <Ionicons
            name="arrow-forward"
            size={16}
            color="#90A4AE"
          />

          <View style={styles.flowItem}>
            <Ionicons
              name="document-text-outline"
              size={20}
              color="#2E7D32"
            />
            <Text style={styles.flowText}>
              Result
            </Text>
          </View>
        </View>

        <Text style={styles.footerText}>
          Please wait while the AI model analyzes the captured
          images.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FAF7',
  },

  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  mainIcon: {
    width: 88,
    height: 88,
    borderRadius: 28,
    backgroundColor: '#EF6C00',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  title: {
    fontSize: 23,
    fontWeight: '800',
    color: '#263238',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 12,
    color: '#78909C',
    textAlign: 'center',
    marginTop: 5,
  },

  progressContainer: {
    marginTop: 27,
  },

  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  progressLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#607D8B',
  },

  progressValue: {
    fontSize: 12,
    fontWeight: '800',
    color: '#EF6C00',
  },

  progressBackground: {
    height: 9,
    borderRadius: 10,
    backgroundColor: '#FFE0B2',
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    backgroundColor: '#EF6C00',
    borderRadius: 10,
  },

  pipelineCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    marginTop: 22,
    borderWidth: 1,
    borderColor: '#E8EDE8',
  },

  pipelineTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#263238',
    marginBottom: 15,
  },

  stepRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },

  stepIcon: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: '#F1F3F3',
    justifyContent: 'center',
    alignItems: 'center',
  },

  stepIconCompleted: {
    backgroundColor: '#2E7D32',
  },

  stepIconCurrent: {
    backgroundColor: '#EF6C00',
  },

  stepContent: {
    flex: 1,
    marginLeft: 11,
    paddingTop: 1,
  },

  stepTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#90A4AE',
  },

  stepTitleCompleted: {
    color: '#2E7D32',
  },

  stepTitleCurrent: {
    color: '#EF6C00',
  },

  stepDescription: {
    fontSize: 10,
    color: '#90A4AE',
    lineHeight: 15,
    marginTop: 2,
  },

  flowCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 13,
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#E8EDE8',
  },

  flowItem: {
    alignItems: 'center',
    gap: 3,
  },

  flowText: {
    fontSize: 8,
    fontWeight: '700',
    color: '#607D8B',
  },

  footerText: {
    fontSize: 10,
    color: '#90A4AE',
    textAlign: 'center',
    marginTop: 15,
    lineHeight: 15,
  },
});