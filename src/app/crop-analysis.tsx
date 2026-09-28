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
import { useRouter } from 'expo-router';

const lands = [
  { id: 'north', name: 'North Field', area: '2 Acres', nodes: 16 },
  { id: 'home', name: 'Home Farm', area: '1.5 Acres', nodes: 9 },
  { id: 'rice', name: 'Rice Field', area: '3 Acres', nodes: 16 },
];

const categories = [
  'Cereals',
  'Fruits',
  'Vegetables',
  'Pulses',
  'Oilseeds',
  'Fibre Crops',
];

const crops: Record<string, string[]> = {
  Cereals: ['Rice', 'Wheat', 'Maize', 'Barley'],
  Fruits: ['Mango', 'Banana', 'Apple', 'Papaya'],
  Vegetables: [
    'Tomato',
    'Potato',
    'Onion',
    'Carrot',
    'Cauliflower',
    'Cabbage',
  ],
  Pulses: ['Chickpea', 'Lentil', 'Green Gram', 'Black Gram'],
  Oilseeds: ['Mustard', 'Groundnut', 'Sunflower', 'Soybean'],
  'Fibre Crops': ['Cotton', 'Jute'],
};

export default function CropAnalysisScreen() {
  const router = useRouter();

  const [step, setStep] = useState(1);

  const [selectedLand, setSelectedLand] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCrop, setSelectedCrop] = useState('');

  const goBack = () => {
    if (step === 1) {
      router.back();
    } else {
      setStep(step - 1);
    }
  };

  const analyzeCrop = () => {
    router.push({
      pathname: '/crop-result',
      params: {
        land: selectedLand,
        category: selectedCategory,
        crop: selectedCrop,
      },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#1B5E20" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Crop Result</Text>

        <View style={styles.placeholder} />
      </View>

      <View style={styles.progressContainer}>
        <View
          style={[
            styles.progressStep,
            step >= 1 && styles.progressStepActive,
          ]}
        />
        <View
          style={[
            styles.progressStep,
            step >= 2 && styles.progressStepActive,
          ]}
        />
        <View
          style={[
            styles.progressStep,
            step >= 3 && styles.progressStepActive,
          ]}
        />
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >

        {/* STEP 1 */}

        {step === 1 && (
          <>
            <Text style={styles.stepNumber}>STEP 1 OF 3</Text>

            <Text style={styles.title}>Select Your Land</Text>

            <Text style={styles.subtitle}>
              Choose the calibrated land you want to analyze.
            </Text>

            {lands.map((land) => (
              <TouchableOpacity
                key={land.id}
                style={[
                  styles.selectionCard,
                  selectedLand === land.name &&
                    styles.selectionCardActive,
                ]}
                onPress={() => setSelectedLand(land.name)}
              >
                <View>
                  <Text style={styles.cardTitle}>🌾 {land.name}</Text>

                  <Text style={styles.cardInfo}>
                    Area: {land.area}
                  </Text>

                  <Text style={styles.cardInfo}>
                    Nodes: {land.nodes}
                  </Text>
                </View>

                {selectedLand === land.name && (
                  <Ionicons
                    name="checkmark-circle"
                    size={28}
                    color="#2E7D32"
                  />
                )}
              </TouchableOpacity>
            ))}

            <TouchableOpacity
              style={[
                styles.nextButton,
                !selectedLand && styles.disabledButton,
              ]}
              disabled={!selectedLand}
              onPress={() => setStep(2)}
            >
              <Text style={styles.nextButtonText}>NEXT</Text>

              <Ionicons
                name="arrow-forward"
                size={20}
                color="#FFFFFF"
              />
            </TouchableOpacity>
          </>
        )}

        {/* STEP 2 */}

        {step === 2 && (
          <>
            <Text style={styles.stepNumber}>STEP 2 OF 3</Text>

            <Text style={styles.title}>Select Crop Category</Text>

            <Text style={styles.subtitle}>
              Choose the category of crop you want to grow.
            </Text>

            <View style={styles.categoryGrid}>
              {categories.map((category) => (
                <TouchableOpacity
                  key={category}
                  style={[
                    styles.categoryCard,
                    selectedCategory === category &&
                      styles.categoryCardActive,
                  ]}
                  onPress={() => {
                    setSelectedCategory(category);
                    setSelectedCrop('');
                  }}
                >
                  <Text
                    style={[
                      styles.categoryText,
                      selectedCategory === category &&
                        styles.categoryTextActive,
                    ]}
                  >
                    {category}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity
              style={[
                styles.nextButton,
                !selectedCategory && styles.disabledButton,
              ]}
              disabled={!selectedCategory}
              onPress={() => setStep(3)}
            >
              <Text style={styles.nextButtonText}>NEXT</Text>

              <Ionicons
                name="arrow-forward"
                size={20}
                color="#FFFFFF"
              />
            </TouchableOpacity>
          </>
        )}

        {/* STEP 3 */}

        {step === 3 && (
          <>
            <Text style={styles.stepNumber}>STEP 3 OF 3</Text>

            <Text style={styles.title}>
              Select Your Crop
            </Text>

            <Text style={styles.subtitle}>
              Choose a crop from {selectedCategory}.
            </Text>

            {crops[selectedCategory]?.map((crop) => (
              <TouchableOpacity
                key={crop}
                style={[
                  styles.selectionCard,
                  selectedCrop === crop &&
                    styles.selectionCardActive,
                ]}
                onPress={() => setSelectedCrop(crop)}
              >
                <Text style={styles.cardTitle}>
                  {crop}
                </Text>

                {selectedCrop === crop && (
                  <Ionicons
                    name="checkmark-circle"
                    size={28}
                    color="#2E7D32"
                  />
                )}
              </TouchableOpacity>
            ))}

            <TouchableOpacity
              style={[
                styles.analyzeButton,
                !selectedCrop && styles.disabledButton,
              ]}
              disabled={!selectedCrop}
              onPress={analyzeCrop}
            >
              <Ionicons
                name="analytics-outline"
                size={22}
                color="#FFFFFF"
              />

              <Text style={styles.nextButtonText}>
                ANALYZE CROP
              </Text>
            </TouchableOpacity>
          </>
        )}

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
    borderBottomColor: '#E8EDE8',
  },

  backButton: {
    width: 40,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1B5E20',
  },

  placeholder: {
    width: 40,
  },

  progressContainer: {
    flexDirection: 'row',
    gap: 6,
    paddingHorizontal: 20,
    paddingTop: 18,
  },

  progressStep: {
    flex: 1,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#DDE5DD',
  },

  progressStepActive: {
    backgroundColor: '#2E7D32',
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  stepNumber: {
    fontSize: 12,
    fontWeight: '700',
    color: '#2E7D32',
    marginTop: 15,
    marginBottom: 8,
  },

  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1B5E20',
  },

  subtitle: {
    fontSize: 14,
    color: '#607066',
    marginTop: 8,
    marginBottom: 25,
    lineHeight: 21,
  },

  selectionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    marginBottom: 12,
    borderWidth: 1.5,
    borderColor: '#E3EAE3',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  selectionCardActive: {
    borderColor: '#2E7D32',
    backgroundColor: '#F1F8F1',
  },

  cardTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#263238',
    marginBottom: 7,
  },

  cardInfo: {
    fontSize: 13,
    color: '#607066',
    marginTop: 3,
  },

  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  categoryCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 22,
    paddingHorizontal: 10,
    marginBottom: 14,
    borderWidth: 1.5,
    borderColor: '#E3EAE3',
    alignItems: 'center',
  },

  categoryCardActive: {
    backgroundColor: '#E8F5E9',
    borderColor: '#2E7D32',
  },

  categoryText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#455A64',
    textAlign: 'center',
  },

  categoryTextActive: {
    color: '#1B5E20',
  },

  nextButton: {
    marginTop: 20,
    backgroundColor: '#2E7D32',
    borderRadius: 14,
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },

  analyzeButton: {
    marginTop: 20,
    backgroundColor: '#1565C0',
    borderRadius: 14,
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },

  disabledButton: {
    backgroundColor: '#B0BEC5',
  },

  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },
});