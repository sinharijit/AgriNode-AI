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

export default function DiseaseSummaryScreen() {
  const router = useRouter();

  const { landName } = useLocalSearchParams<{
    landName: string;
  }>();

  // Prototype data.
  // Later this will come from the backend/database.
  const nodeResults = [
    {
      node: 'N1',
      disease: 'Healthy',
      probability: '96%',
      severity: 'None',
    },
    {
      node: 'N2',
      disease: 'Healthy',
      probability: '92%',
      severity: 'None',
    },
    {
      node: 'N3',
      disease: 'Leaf Spot',
      probability: '71%',
      severity: 'Mild',
    },
    {
      node: 'N4',
      disease: 'Healthy',
      probability: '94%',
      severity: 'None',
    },
    {
      node: 'N5',
      disease: 'Early Blight',
      probability: '87%',
      severity: 'Moderate',
    },
    {
      node: 'N6',
      disease: 'Healthy',
      probability: '95%',
      severity: 'None',
    },
    {
      node: 'N7',
      disease: 'Healthy',
      probability: '93%',
      severity: 'None',
    },
    {
      node: 'N8',
      disease: 'Leaf Spot',
      probability: '68%',
      severity: 'Mild',
    },
    {
      node: 'N9',
      disease: 'Healthy',
      probability: '97%',
      severity: 'None',
    },
  ];

  const getStatusColor = (disease: string) => {
    if (disease === 'Healthy') {
      return '#2E7D32';
    }

    return '#C62828';
  };

  const getSeverityStyle = (severity: string) => {
    if (severity === 'None') {
      return styles.noneSeverity;
    }

    if (severity === 'Mild') {
      return styles.mildSeverity;
    }

    return styles.moderateSeverity;
  };

  const healthyNodes = nodeResults.filter(
    (item) => item.disease === 'Healthy'
  ).length;

  const affectedNodes = nodeResults.length - healthyNodes;

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
          Disease Summary
        </Text>

        <View style={styles.headerPlaceholder} />

      </View>


      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        {/* LAND INFORMATION */}

        <View style={styles.landCard}>

          <View style={styles.landIcon}>
            <Ionicons
              name="map-outline"
              size={25}
              color="#2E7D32"
            />
          </View>

          <View>

            <Text style={styles.landLabel}>
              SELECTED LAND
            </Text>

            <Text style={styles.landName}>
              {landName || 'Selected Land'}
            </Text>

          </View>

        </View>


        {/* SUMMARY */}

        <Text style={styles.sectionTitle}>
          Land Disease Overview
        </Text>

        <View style={styles.statsRow}>

          <View style={styles.statCard}>

            <View style={styles.statIconHealthy}>
              <Ionicons
                name="checkmark-circle"
                size={22}
                color="#2E7D32"
              />
            </View>

            <Text style={styles.statNumber}>
              {healthyNodes}
            </Text>

            <Text style={styles.statLabel}>
              Healthy Nodes
            </Text>

          </View>


          <View style={styles.statCard}>

            <View style={styles.statIconAffected}>
              <Ionicons
                name="alert-circle"
                size={22}
                color="#C62828"
              />
            </View>

            <Text style={styles.statNumber}>
              {affectedNodes}
            </Text>

            <Text style={styles.statLabel}>
              Affected Nodes
            </Text>

          </View>

        </View>


        {/* NODE RESULTS */}

        <View style={styles.resultsHeader}>

          <Text style={styles.sectionTitle}>
            Node-Wise Results
          </Text>

          <Text style={styles.nodeCount}>
            {nodeResults.length} Nodes
          </Text>

        </View>


        <View style={styles.table}>

          {/* TABLE HEADER */}

          <View style={styles.tableHeader}>

            <Text style={[styles.headerCell, styles.nodeColumn]}>
              Node
            </Text>

            <Text style={[styles.headerCell, styles.diseaseColumn]}>
              Disease
            </Text>

            <Text style={[styles.headerCell, styles.probabilityColumn]}>
              Probability
            </Text>

          </View>


          {/* TABLE ROWS */}

          {nodeResults.map((item, index) => (

            <TouchableOpacity
              key={item.node}
              style={[
                styles.tableRow,
                index === nodeResults.length - 1 &&
                  styles.lastTableRow,
              ]}
              activeOpacity={0.75}
            >

              <Text style={[styles.cell, styles.nodeColumn]}>
                {item.node}
              </Text>


              <View style={styles.diseaseColumn}>

                <View style={styles.diseaseCell}>

                  <View
                    style={[
                      styles.statusDot,
                      {
                        backgroundColor: getStatusColor(
                          item.disease
                        ),
                      },
                    ]}
                  />

                  <Text
                    style={[
                      styles.diseaseText,
                      {
                        color: getStatusColor(
                          item.disease
                        ),
                      },
                    ]}
                  >
                    {item.disease}
                  </Text>

                </View>

              </View>


              <Text
                style={[
                  styles.cell,
                  styles.probabilityColumn,
                  styles.probabilityText,
                ]}
              >
                {item.probability}
              </Text>

            </TouchableOpacity>

          ))}

        </View>


        {/* ALERT */}

        <View style={styles.alertBox}>

          <Ionicons
            name="warning-outline"
            size={24}
            color="#E67E22"
          />

          <View style={styles.alertContent}>

            <Text style={styles.alertTitle}>
              Agricultural Alert
            </Text>

            <Text style={styles.alertText}>
              {affectedNodes} nodes show signs of plant disease.
              Inspect affected areas and take recommended action.
            </Text>

          </View>

        </View>


        {/* BACK TO LAND */}

        <TouchableOpacity
          style={styles.backToLandButton}
          onPress={() => router.push('/disease')}
        >

          <Ionicons
            name="leaf-outline"
            size={21}
            color="#FFFFFF"
          />

          <Text style={styles.backToLandText}>
            CHECK ANOTHER LAND
          </Text>

        </TouchableOpacity>

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


  landCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E3EAE3',
    marginBottom: 25,
  },


  landIcon: {
    width: 52,
    height: 52,
    borderRadius: 15,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },


  landLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#90A4AE',
    letterSpacing: 0.7,
  },


  landName: {
    fontSize: 18,
    fontWeight: '800',
    color: '#263238',
    marginTop: 4,
  },


  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#263238',
  },


  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 14,
    marginBottom: 28,
  },


  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E3EAE3',
  },


  statIconHealthy: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
  },


  statIconAffected: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#FFEBEE',
    justifyContent: 'center',
    alignItems: 'center',
  },


  statNumber: {
    fontSize: 26,
    fontWeight: '800',
    color: '#263238',
    marginTop: 12,
  },


  statLabel: {
    fontSize: 11,
    color: '#78909C',
    marginTop: 3,
  },


  resultsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },


  nodeCount: {
    fontSize: 11,
    fontWeight: '700',
    color: '#78909C',
  },


  table: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E3EAE3',
    overflow: 'hidden',
  },


  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#F1F5F1',
    paddingVertical: 13,
    paddingHorizontal: 12,
  },


  headerCell: {
    fontSize: 10,
    fontWeight: '800',
    color: '#607066',
  },


  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEF1EE',
  },


  lastTableRow: {
    borderBottomWidth: 0,
  },


  nodeColumn: {
    width: '18%',
  },


  diseaseColumn: {
    width: '52%',
  },


  probabilityColumn: {
    width: '30%',
    textAlign: 'right',
  },


  cell: {
    fontSize: 12,
    color: '#37474F',
    fontWeight: '600',
  },


  diseaseCell: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },


  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },


  diseaseText: {
    fontSize: 12,
    fontWeight: '700',
  },


  probabilityText: {
    color: '#455A64',
  },


  alertBox: {
    flexDirection: 'row',
    backgroundColor: '#FFF8E1',
    padding: 17,
    borderRadius: 17,
    marginTop: 22,
    gap: 12,
  },


  alertContent: {
    flex: 1,
  },


  alertTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#8D6E00',
    marginBottom: 4,
  },


  alertText: {
    fontSize: 11,
    lineHeight: 17,
    color: '#7A6A36',
  },


  backToLandButton: {
    minHeight: 56,
    borderRadius: 16,
    backgroundColor: '#1B5E20',
    marginTop: 22,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 9,
  },


  backToLandText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
  },

});