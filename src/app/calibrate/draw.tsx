import React, { useState } from 'react';
import { router } from 'expo-router';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { useRouter, useLocalSearchParams } from 'expo-router';

import Svg, {
  Polygon,
  Circle,
  Line,
} from 'react-native-svg';

import { PanResponder } from 'react-native';

const { width } = Dimensions.get('window');

const CANVAS_WIDTH = width - 40;
const CANVAS_HEIGHT = 420;

type Point = {
  x: number;
  y: number;
};

export default function DrawLandScreen() {
  const router = useRouter();

  const params = useLocalSearchParams();

  const vertexCount = Number(params.vertices || 4);

  const [points, setPoints] = useState<Point[]>(
    generatePolygon(vertexCount)
  );

  const [selectedPoint, setSelectedPoint] = useState<number | null>(null);

  function generatePolygon(count: number): Point[] {
    const generatedPoints: Point[] = [];

    const centerX = CANVAS_WIDTH / 2;
    const centerY = CANVAS_HEIGHT / 2;

    const radius = Math.min(CANVAS_WIDTH, CANVAS_HEIGHT) * 0.32;

    for (let i = 0; i < count; i++) {
      const angle =
        (2 * Math.PI * i) / count - Math.PI / 2;

      generatedPoints.push({
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
      });
    }

    return generatedPoints;
  }

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,

    onMoveShouldSetPanResponder: () => true,

    onPanResponderGrant: (event) => {
      const { locationX, locationY } = event.nativeEvent;

      let nearestIndex = -1;
      let nearestDistance = Infinity;

      points.forEach((point, index) => {
        const distance = Math.sqrt(
          Math.pow(point.x - locationX, 2) +
            Math.pow(point.y - locationY, 2)
        );

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });

      if (nearestDistance < 35) {
        setSelectedPoint(nearestIndex);
      }
    },

    onPanResponderMove: (event) => {
      if (selectedPoint === null) return;

      const { locationX, locationY } = event.nativeEvent;

      const newPoints = [...points];

      const padding = 15;

      newPoints[selectedPoint] = {
        x: Math.max(
          padding,
          Math.min(locationX, CANVAS_WIDTH - padding)
        ),

        y: Math.max(
          padding,
          Math.min(locationY, CANVAS_HEIGHT - padding)
        ),
      };

      setPoints(newPoints);
    },

    onPanResponderRelease: () => {
      setSelectedPoint(null);
    },

    onPanResponderTerminate: () => {
      setSelectedPoint(null);
    },
  });

  const polygonPoints = points
    .map((point) => `${point.x},${point.y}`)
    .join(' ');

  function handleCreateLand() {
    Alert.alert(
      'Land Shape Created',
      'Your field boundary has been successfully designed.',
      [
        {
          text: 'Continue',
          onPress: () =>
            router.push({
              pathname: '/calibrate/instructions',
              params: {
                landName: String(params.landName || ''),
                area: String(params.area || ''),
                vertices: String(vertexCount),
              },
            }),
        },
      ]
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.title}>Design Your Land</Text>

          <Text style={styles.subtitle}>
            Drag the points to match your real field shape
          </Text>
        </View>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>
          {params.landName || 'My Land'}
        </Text>

        <Text style={styles.infoText}>
          {params.area || 'Area not specified'} • {vertexCount} vertices
        </Text>
      </View>

      <View style={styles.canvasContainer} {...panResponder.panHandlers}>
        <Svg
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
        >
          <Polygon
            points={polygonPoints}
            fill="rgba(46, 125, 50, 0.12)"
            stroke="#1B5E20"
            strokeWidth={3}
          />

          {points.map((point, index) => {
            const nextPoint =
              points[(index + 1) % points.length];

            return (
              <React.Fragment key={index}>
                <Line
                  x1={point.x}
                  y1={point.y}
                  x2={nextPoint.x}
                  y2={nextPoint.y}
                  stroke="#1B5E20"
                  strokeWidth={2}
                />

                <Circle
                  cx={point.x}
                  cy={point.y}
                  r={13}
                  fill={
                    selectedPoint === index
                      ? '#0D47A1'
                      : '#2E7D32'
                  }
                  stroke="#FFFFFF"
                  strokeWidth={3}
                />

                <Circle
                  cx={point.x}
                  cy={point.y}
                  r={4}
                  fill="#FFFFFF"
                />
              </React.Fragment>
            );
          })}
        </Svg>
      </View>

      <View style={styles.instructionBox}>
        <Text style={styles.instructionTitle}>
          How to design your land
        </Text>

        <Text style={styles.instructionText}>
          • Drag any green point with your finger.
        </Text>

        <Text style={styles.instructionText}>
          • Adjust the boundary to resemble your actual field.
        </Text>

        <Text style={styles.instructionText}>
          • When satisfied, create your land.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.createButton}
        onPress={() => router.push('/calibrate/calibration')}
      >
        <Text style={styles.createButtonText}>
          CREATE LAND →
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FAF7',
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    elevation: 2,
  },

  backText: {
    fontSize: 28,
    color: '#1B5E20',
    fontWeight: '600',
  },

  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#263238',
  },

  subtitle: {
    fontSize: 13,
    color: '#607066',
    marginTop: 4,
  },

  infoCard: {
    backgroundColor: '#E8F5E9',
    padding: 16,
    borderRadius: 16,
    marginBottom: 20,
  },

  infoTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1B5E20',
  },

  infoText: {
    fontSize: 13,
    color: '#607066',
    marginTop: 5,
  },

  canvasContainer: {
    width: CANVAS_WIDTH,
    height: CANVAS_HEIGHT,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#DDE7DD',
    overflow: 'hidden',
    elevation: 2,
  },

  instructionBox: {
    marginTop: 18,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 16,
  },

  instructionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#263238',
    marginBottom: 8,
  },

  instructionText: {
    fontSize: 13,
    color: '#607066',
    marginTop: 4,
    lineHeight: 20,
  },

  createButton: {
    backgroundColor: '#1B5E20',
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
    marginBottom: 10,
  },

  createButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
});