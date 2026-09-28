import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Profile() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View
        style={[
          styles.header,
          {
            paddingTop: insets.top,
            height: 78 + insets.top,
          },
        ]}
      >
        <View>
          <Text style={styles.logo}>AgriNode AI</Text>
          <Text style={styles.tagline}>
            Precision Farming, Node by Node
          </Text>
        </View>

        <TouchableOpacity style={styles.notificationButton}>
          <Ionicons
            name="notifications-outline"
            size={23}
            color="#263238"
          />
          <View style={styles.notificationDot} />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* PROFILE HEADER */}
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Ionicons
              name="person"
              size={38}
              color="#1B5E20"
            />
          </View>

          <View style={styles.profileInfo}>
            <Text style={styles.welcomeText}>
              FARMER PROFILE
            </Text>

            <Text style={styles.name}>
              Arijit Sinha
            </Text>

            <Text style={styles.location}>
              <Ionicons
                name="location-outline"
                size={13}
                color="#78909C"
              />{' '}
              West Bengal, India
            </Text>
          </View>

          <TouchableOpacity style={styles.editButton}>
            <Ionicons
              name="create-outline"
              size={19}
              color="#1B5E20"
            />
          </TouchableOpacity>
        </View>

        {/* FARM OVERVIEW */}
        <Text style={styles.sectionTitle}>
          Farm Overview
        </Text>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <View style={styles.statIcon}>
              <Ionicons
                name="map-outline"
                size={21}
                color="#1B5E20"
              />
            </View>

            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Lands</Text>
          </View>

          <View style={styles.statCard}>
            <View style={styles.statIcon}>
              <Ionicons
                name="grid-outline"
                size={21}
                color="#1B5E20"
              />
            </View>

            <Text style={styles.statNumber}>37</Text>
            <Text style={styles.statLabel}>Nodes</Text>
          </View>

          <View style={styles.statCard}>
            <View style={styles.statIcon}>
              <Ionicons
                name="leaf-outline"
                size={21}
                color="#1B5E20"
              />
            </View>

            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Analyses</Text>
          </View>
        </View>

        {/* DEVICE STATUS */}
        <Text style={styles.sectionTitle}>
          Connected System
        </Text>

        <View style={styles.deviceCard}>
          <View style={styles.deviceIcon}>
            <Ionicons
              name="hardware-chip-outline"
              size={25}
              color="#1B5E20"
            />
          </View>

          <View style={styles.deviceInfo}>
            <Text style={styles.deviceName}>
              AgriNode Field Device
            </Text>

            <Text style={styles.deviceSub}>
              ESP32-based monitoring system
            </Text>
          </View>

          <View style={styles.onlineContainer}>
            <View style={styles.onlineDot} />
            <Text style={styles.onlineText}>
              Online
            </Text>
          </View>
        </View>

        {/* AI STATUS */}
        <View style={styles.aiCard}>
          <View style={styles.aiIcon}>
            <Ionicons
              name="sparkles"
              size={22}
              color="#1B5E20"
            />
          </View>

          <View style={styles.aiInfo}>
            <Text style={styles.aiTitle}>
              AgriNode AI Intelligence
            </Text>

            <Text style={styles.aiText}>
              Your farm is being monitored using node-level
              soil, environment and crop intelligence.
            </Text>
          </View>
        </View>

        {/* MENU */}
        <Text style={styles.sectionTitle}>
          Account & Support
        </Text>

        <View style={styles.menuCard}>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Ionicons
                name="settings-outline"
                size={21}
                color="#546E7A"
              />
            </View>

            <View style={styles.menuText}>
              <Text style={styles.menuTitle}>
                Settings
              </Text>

              <Text style={styles.menuSubtitle}>
                App preferences and configuration
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={19}
              color="#90A4AE"
            />
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Ionicons
                name="help-circle-outline"
                size={21}
                color="#546E7A"
              />
            </View>

            <View style={styles.menuText}>
              <Text style={styles.menuTitle}>
                Help & Support
              </Text>

              <Text style={styles.menuSubtitle}>
                Get help with AgriNode AI
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={19}
              color="#90A4AE"
            />
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Ionicons
                name="information-circle-outline"
                size={21}
                color="#546E7A"
              />
            </View>

            <View style={styles.menuText}>
              <Text style={styles.menuTitle}>
                About AgriNode AI
              </Text>

              <Text style={styles.menuSubtitle}>
                Version 1.0 • Smart Farming Assistant
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={19}
              color="#90A4AE"
            />
          </TouchableOpacity>
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <Ionicons
            name="leaf"
            size={16}
            color="#2E7D32"
          />

          <Text style={styles.footerText}>
            Precision Farming, Node by Node
          </Text>
        </View>

        <View style={{ height: 30 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F8F4',
  },

  header: {
    height: 78,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#E8EDE8',
  },

  logo: {
    fontSize: 20,
    fontWeight: '900',
    color: '#1B5E20',
  },

  tagline: {
    fontSize: 10,
    color: '#78909C',
    marginTop: 2,
  },

  notificationButton: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#F1F6F1',
    justifyContent: 'center',
    alignItems: 'center',
  },

  notificationDot: {
    position: 'absolute',
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#E53935',
    top: 9,
    right: 9,
  },

  scrollContent: {
    padding: 16,
  },

  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E1EAE1',
    marginBottom: 22,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 13,
  },

  profileInfo: {
    flex: 1,
  },

  welcomeText: {
    fontSize: 9,
    fontWeight: '800',
    color: '#78909C',
    letterSpacing: 0.7,
  },

  name: {
    fontSize: 19,
    fontWeight: '900',
    color: '#263238',
    marginTop: 3,
  },

  location: {
    fontSize: 11,
    color: '#78909C',
    marginTop: 4,
  },

  editButton: {
    width: 38,
    height: 38,
    borderRadius: 11,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#263238',
    marginBottom: 11,
  },

  statsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 22,
  },

  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingVertical: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E1EAE1',
  },

  statIcon: {
    width: 38,
    height: 38,
    borderRadius: 11,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 7,
  },

  statNumber: {
    fontSize: 21,
    fontWeight: '900',
    color: '#263238',
  },

  statLabel: {
    fontSize: 10,
    color: '#78909C',
    marginTop: 2,
  },

  deviceCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E1EAE1',
    marginBottom: 14,
  },

  deviceIcon: {
    width: 46,
    height: 46,
    borderRadius: 13,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  deviceInfo: {
    flex: 1,
  },

  deviceName: {
    fontSize: 13,
    fontWeight: '800',
    color: '#263238',
  },

  deviceSub: {
    fontSize: 10,
    color: '#78909C',
    marginTop: 3,
  },

  onlineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 9,
    gap: 5,
  },

  onlineDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#2E7D32',
  },

  onlineText: {
    fontSize: 9,
    fontWeight: '800',
    color: '#2E7D32',
  },

  aiCard: {
    backgroundColor: '#E8F5E9',
    borderRadius: 16,
    padding: 15,
    flexDirection: 'row',
    marginBottom: 22,
  },

  aiIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  aiInfo: {
    flex: 1,
  },

  aiTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#1B5E20',
  },

  aiText: {
    fontSize: 10,
    lineHeight: 16,
    color: '#4E6A52',
    marginTop: 4,
  },

  menuCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E1EAE1',
    overflow: 'hidden',
  },

  menuItem: {
    minHeight: 68,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },

  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 11,
    backgroundColor: '#F1F5F2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  menuText: {
    flex: 1,
  },

  menuTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#37474F',
  },

  menuSubtitle: {
    fontSize: 9,
    color: '#90A4AE',
    marginTop: 3,
  },

  divider: {
    height: 1,
    backgroundColor: '#EEF2EE',
    marginLeft: 66,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    gap: 6,
  },

  footerText: {
    fontSize: 10,
    color: '#78909C',
  },
});