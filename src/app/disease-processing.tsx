import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';

export default function DiseaseProcessingScreen() {
  const router = useRouter();

  const { landName, nodeNumber } = useLocalSearchParams<{
    landName: string;
    nodeNumber: string;
  }>();

  const [step, setStep] = useState(0);

  const processingSteps = [
    'Uploading captured images to database',
    'Images stored successfully',
    'ML model fetching plant images',
    'Analyzing plant and leaf patterns',
    'Detecting possible diseases',
    'Calculating disease probability',
    'Saving analysis result to database',
  ];

  useEffect(() => {
    if (step < processingSteps.length) {
      const timer = setTimeout(() => {
        setStep((current) => current + 1);
      }, 1000);

      return () => clearTimeout(timer);
    }

    if (step === processingSteps.length) {
      const timer = setTimeout(() => {
        router.replace({
          pathname: '/disease-result',
          params: {
            landName,
            nodeNumber,
          },
        });
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Ionicons
            name="analytics-outline"
            size={55}
            color="#1B5E20"
          />
        </View>

        <Text style={styles.title}>
          Processing Plant Images
        </Text>

        <Text style={styles.subtitle}>
          Analyzing images captured from Node {nodeNumber}
          {landName ? ` in ${landName}` : ''}
        </Text>

        <View style={styles.processingCard}>
          {processingSteps.map((item, index) => {
            const completed = index < step;
            const active = index === step;

            return (
              <View
                key={index}
                style={styles.stepRow}
              >
                <View style={styles.stepIcon}>
                  {completed ? (
                    <Ionicons
                      name="checkmark-circle"
                      size={23}
                      color="#2E7D32"
                    />
                  ) : active ? (
                    <ActivityIndicator
                      size="small"
                      color="#1565C0"
                    />
                  ) : (
                    <Ionicons
                      name="ellipse-outline"
                      size={20}
                      color="#CFD8DC"
                    />
                  )}
                </View>

                <Text
                  style={[
                    styles.stepText,
                    completed && styles.completedText,
                    active && styles.activeText,
                  ]}
                >
                  {item}
                </Text>
              </View>
            );
          })}
        </View>

        <View style={styles.infoBox}>
          <Ionicons
            name="information-circle-outline"
            size={22}
            color="#1565C0"
          />

          <Text style={styles.infoText}>
            The captured plant images are processed by the disease
            detection ML model. The final analysis is stored under the
            selected land and node.
          </Text>
        </View>
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
    padding: 24,
    justifyContent: 'center',
  },

  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 30,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 22,
  },

  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#263238',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 13,
    color: '#78909C',
    textAlign: 'center',
    lineHeight: 20,
    marginTop: 10,
    marginBottom: 28,
  },

  processingCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E3EAE3',
  },

  stepRow: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 48,
  },

  stepIcon: {
    width: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },

  stepText: {
    flex: 1,
    fontSize: 13,
    color: '#90A4AE',
    marginLeft: 10,
  },

  completedText: {
    color: '#2E7D32',
    fontWeight: '600',
  },

  activeText: {
    color: '#1565C0',
    fontWeight: '700',
  },

  infoBox: {
    flexDirection: 'row',
    backgroundColor: '#E3F2FD',
    borderRadius: 16,
    padding: 16,
    marginTop: 20,
    gap: 10,
  },

  infoText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 18,
    color: '#526B7A',
  },
});