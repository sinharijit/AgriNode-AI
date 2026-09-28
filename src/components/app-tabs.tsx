import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function AppTabs() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#1B5E20',
        tabBarInactiveTintColor: '#90A4AE',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: '#E8EDE8',
          height: 65,
          paddingTop: 6,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
        tabBarIcon: ({ color, size, focused }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home-outline';

          if (route.name === 'index') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'lands') {
            iconName = focused ? 'map' : 'map-outline';
          } else if (route.name === 'analyze') {
            iconName = focused ? 'analytics' : 'analytics-outline';
          } else if (route.name === 'profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />

      <Tabs.Screen
        name="lands"
        options={{
          title: 'My Lands',
        }}
      />

      <Tabs.Screen
        name="analyze"
        options={{
          title: 'Analyze',
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
        }}
      />

      <Tabs.Screen
        name="disease"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="pest"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="irrigation"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="calibrate"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="calibrate/draw"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="calibrate/calibration"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="calibrate/sampling"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="calibrate/nodes"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="calibrate/process"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="calibrate/node-details"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="land-details"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="node-details"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="crop-result"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="crop-analysis"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="land-profile"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="land-analyses"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="profile-analysis"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="disease-node"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="disease-summary"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="disease-result"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="disease-processing"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="disease-capture"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="pest-node"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="pest-capture"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="pest-processing"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="pest-result"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="pest-summary"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}