import { useLocalSearchParams, router } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';


const nodeData: Record<
  string,
  {
    health: string;
    healthColor: string;
    nitrogen: string;
    phosphorus: string;
    potassium: string;
    ph: string;
    ec: string;
    moisture: string;
    temperature: string;
    humidity: string;
  }
> = {

  '1': {
    health: 'Excellent',
    healthColor: '#2E7D32',
    nitrogen: '52 mg/kg',
    phosphorus: '38 mg/kg',
    potassium: '145 mg/kg',
    ph: '6.7',
    ec: '1.1 dS/m',
    moisture: '48%',
    temperature: '28°C',
    humidity: '71%',
  },

  '2': {
    health: 'Good',
    healthColor: '#43A047',
    nitrogen: '48 mg/kg',
    phosphorus: '34 mg/kg',
    potassium: '132 mg/kg',
    ph: '6.5',
    ec: '1.2 dS/m',
    moisture: '44%',
    temperature: '29°C',
    humidity: '70%',
  },

  '3': {
    health: 'Good',
    healthColor: '#43A047',
    nitrogen: '45 mg/kg',
    phosphorus: '32 mg/kg',
    potassium: '128 mg/kg',
    ph: '6.6',
    ec: '1.2 dS/m',
    moisture: '42%',
    temperature: '29°C',
    humidity: '69%',
  },

  '4': {
    health: 'Attention Needed',
    healthColor: '#F9A825',
    nitrogen: '38 mg/kg',
    phosphorus: '28 mg/kg',
    potassium: '120 mg/kg',
    ph: '6.4',
    ec: '1.3 dS/m',
    moisture: '36%',
    temperature: '30°C',
    humidity: '67%',
  },

  '5': {
    health: 'Good',
    healthColor: '#2E7D32',
    nitrogen: 'Low',
    phosphorus: 'Normal',
    potassium: 'High',
    ph: '6.5',
    ec: '1.2 dS/m',
    moisture: '42%',
    temperature: '29°C',
    humidity: '72%',
  },

};


const defaultNode = {
  health: 'Good',
  healthColor: '#43A047',
  nitrogen: '46 mg/kg',
  phosphorus: '31 mg/kg',
  potassium: '126 mg/kg',
  ph: '6.6',
  ec: '1.2 dS/m',
  moisture: '41%',
  temperature: '29°C',
  humidity: '70%',
};


export default function NodeDetailsScreen() {

  const { nodeId, landId } = useLocalSearchParams();

  const node =
    nodeData[nodeId as string] || defaultNode;


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
            onPress={() =>
                router.navigate({
                    pathname: '/land-details',
                    params: {
                    landId: landId as string,
                    },
                })
            }
          >

            <Ionicons
              name="arrow-back"
              size={24}
              color="#1B5E20"
            />

          </TouchableOpacity>


          <Text style={styles.headerTitle}>
            Node Details
          </Text>


          <View style={styles.headerSpacer} />

        </View>


        {/* NODE HERO */}

        <View style={styles.nodeHero}>

          <View style={styles.nodeCircle}>

            <Ionicons
              name="location"
              size={38}
              color="#FFFFFF"
            />

          </View>


          <Text style={styles.nodeTitle}>
            NODE {nodeId}
          </Text>


          <Text style={styles.nodeSubtitle}>
            Monitoring Point • Land Node
          </Text>

        </View>


        {/* SOIL HEALTH CARD */}

        <View
          style={[
            styles.healthCard,
            {
              borderLeftColor: node.healthColor,
            },
          ]}
        >

          <View style={styles.healthIcon}>

            <Ionicons
              name="heart-outline"
              size={25}
              color={node.healthColor}
            />

          </View>


          <View style={styles.healthContent}>

            <Text style={styles.healthLabel}>
              SOIL HEALTH
            </Text>


            <Text
              style={[
                styles.healthValue,
                {
                  color: node.healthColor,
                },
              ]}
            >
              {node.health}
            </Text>

          </View>


          <View
            style={[
              styles.statusDot,
              {
                backgroundColor: node.healthColor,
              },
            ]}
          />

        </View>


        {/* SOIL NUTRIENTS */}

        <Text style={styles.sectionTitle}>
          Soil Nutrients
        </Text>


        <View style={styles.nutrientContainer}>


          <View style={styles.nutrientCard}>

            <View
              style={[
                styles.nutrientIcon,
                { backgroundColor: '#E8F5E9' },
              ]}
            >
              <Text style={styles.nutrientLetter}>
                N
              </Text>
            </View>

            <Text style={styles.nutrientName}>
              Nitrogen
            </Text>

            <Text style={styles.nutrientValue}>
              {node.nitrogen}
            </Text>

          </View>


          <View style={styles.nutrientCard}>

            <View
              style={[
                styles.nutrientIcon,
                { backgroundColor: '#FFF3E0' },
              ]}
            >
              <Text style={styles.nutrientLetter}>
                P
              </Text>
            </View>

            <Text style={styles.nutrientName}>
              Phosphorus
            </Text>

            <Text style={styles.nutrientValue}>
              {node.phosphorus}
            </Text>

          </View>


          <View style={styles.nutrientCard}>

            <View
              style={[
                styles.nutrientIcon,
                { backgroundColor: '#E3F2FD' },
              ]}
            >
              <Text style={styles.nutrientLetter}>
                K
              </Text>
            </View>

            <Text style={styles.nutrientName}>
              Potassium
            </Text>

            <Text style={styles.nutrientValue}>
              {node.potassium}
            </Text>

          </View>

        </View>


        {/* SOIL PARAMETERS */}

        <Text style={styles.sectionTitle}>
          Soil Parameters
        </Text>


        <View style={styles.parameterCard}>

          <ParameterRow
            icon="flask-outline"
            title="pH Level"
            value={node.ph}
          />

          <View style={styles.divider} />

          <ParameterRow
            icon="pulse-outline"
            title="Electrical Conductivity"
            value={node.ec}
          />

          <View style={styles.divider} />

          <ParameterRow
            icon="water-outline"
            title="Soil Moisture"
            value={node.moisture}
          />

        </View>


        {/* ENVIRONMENT */}

        <Text style={styles.sectionTitle}>
          Environmental Conditions
        </Text>


        <View style={styles.environmentRow}>


          <View style={styles.environmentCard}>

            <Ionicons
              name="thermometer-outline"
              size={28}
              color="#EF6C00"
            />

            <Text style={styles.environmentValue}>
              {node.temperature}
            </Text>

            <Text style={styles.environmentLabel}>
              Temperature
            </Text>

          </View>


          <View style={styles.environmentCard}>

            <Ionicons
              name="water-outline"
              size={28}
              color="#1565C0"
            />

            <Text style={styles.environmentValue}>
              {node.humidity}
            </Text>

            <Text style={styles.environmentLabel}>
              Humidity
            </Text>

          </View>

        </View>


        {/* LAST UPDATED */}

        <View style={styles.updatedContainer}>

          <Ionicons
            name="time-outline"
            size={16}
            color="#90A4AE"
          />

          <Text style={styles.updatedText}>
            Sample data • Last updated today
          </Text>

        </View>

      </ScrollView>

    </SafeAreaView>

  );

}


function ParameterRow({
  icon,
  title,
  value,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  value: string;
}) {

  return (

    <View style={styles.parameterRow}>

      <View style={styles.parameterLeft}>

        <View style={styles.parameterIcon}>

          <Ionicons
            name={icon}
            size={21}
            color="#1B5E20"
          />

        </View>


        <Text style={styles.parameterTitle}>
          {title}
        </Text>

      </View>


      <Text style={styles.parameterValue}>
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


  /* HEADER */

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
  },

  backButton: {
    width: 42,
    height: 42,
    backgroundColor: '#E8F5E9',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#263238',
  },

  headerSpacer: {
    width: 42,
  },


  /* HERO */

  nodeHero: {
    alignItems: 'center',
    marginBottom: 25,
  },

  nodeCircle: {
    width: 78,
    height: 78,
    borderRadius: 28,
    backgroundColor: '#1B5E20',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 13,
  },

  nodeTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#263238',
  },

  nodeSubtitle: {
    fontSize: 12,
    color: '#78909C',
    marginTop: 5,
  },


  /* HEALTH */

  healthCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    borderLeftWidth: 5,
    marginBottom: 27,
    elevation: 2,
  },

  healthIcon: {
    marginRight: 13,
  },

  healthContent: {
    flex: 1,
  },

  healthLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#90A4AE',
    letterSpacing: 1,
  },

  healthValue: {
    fontSize: 19,
    fontWeight: '800',
    marginTop: 4,
  },

  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 10,
  },


  /* SECTION */

  sectionTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: '#263238',
    marginBottom: 14,
  },


  /* NPK */

  nutrientContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 27,
  },

  nutrientCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingVertical: 15,
    alignItems: 'center',
    elevation: 2,
  },

  nutrientIcon: {
    width: 37,
    height: 37,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },

  nutrientLetter: {
    fontSize: 17,
    fontWeight: '800',
    color: '#263238',
  },

  nutrientName: {
    fontSize: 10,
    color: '#78909C',
  },

  nutrientValue: {
    fontSize: 12,
    fontWeight: '800',
    color: '#263238',
    marginTop: 4,
    textAlign: 'center',
  },


  /* PARAMETERS */

  parameterCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 19,
    paddingHorizontal: 16,
    marginBottom: 27,
    elevation: 2,
  },

  parameterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },

  parameterLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  parameterIcon: {
    width: 36,
    height: 36,
    borderRadius: 11,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 11,
  },

  parameterTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#455A64',
  },

  parameterValue: {
    fontSize: 14,
    fontWeight: '800',
    color: '#263238',
  },

  divider: {
    height: 1,
    backgroundColor: '#EDF1ED',
  },


  /* ENVIRONMENT */

  environmentRow: {
    flexDirection: 'row',
    gap: 14,
  },

  environmentCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 19,
    padding: 20,
    alignItems: 'center',
    elevation: 2,
  },

  environmentValue: {
    fontSize: 20,
    fontWeight: '800',
    color: '#263238',
    marginTop: 9,
  },

  environmentLabel: {
    fontSize: 11,
    color: '#78909C',
    marginTop: 4,
  },


  /* UPDATE */

  updatedContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },

  updatedText: {
    fontSize: 11,
    color: '#90A4AE',
    marginLeft: 5,
  },

});