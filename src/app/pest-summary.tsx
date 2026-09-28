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
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function PestSummary() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const insets = useSafeAreaInsets();

  const landName = String(params.landName || 'North Field');

  // Match the node count of the selected land
  const nodeCount =
    landName === 'North Field'
      ? 16
      : landName === 'Home Farm'
        ? 9
        : landName === 'Rice Field'
          ? 12
          : 9;

  // Prototype node-wise results
  const pestResults = [
    { pest: 'Healthy', confidence: '96%', risk: 'Low' },
    { pest: 'Brown Planthopper', confidence: '91%', risk: 'High' },
    { pest: 'Healthy', confidence: '94%', risk: 'Low' },
    { pest: 'Stem Borer', confidence: '78%', risk: 'Moderate' },
    { pest: 'Healthy', confidence: '95%', risk: 'Low' },
    { pest: 'Brown Planthopper', confidence: '88%', risk: 'High' },
    { pest: 'Healthy', confidence: '93%', risk: 'Low' },
    { pest: 'Leaf Folder', confidence: '74%', risk: 'Moderate' },
    { pest: 'Healthy', confidence: '97%', risk: 'Low' },
    { pest: 'Healthy', confidence: '92%', risk: 'Low' },
    { pest: 'Brown Planthopper', confidence: '85%', risk: 'High' },
    { pest: 'Healthy', confidence: '95%', risk: 'Low' },
    { pest: 'Healthy', confidence: '94%', risk: 'Low' },
    { pest: 'Stem Borer', confidence: '81%', risk: 'Moderate' },
    { pest: 'Healthy', confidence: '96%', risk: 'Low' },
    { pest: 'Healthy', confidence: '93%', risk: 'Low' },
  ];

  const nodes = Array.from({ length: nodeCount }, (_, index) => {
    return {
      node: index + 1,
      ...(pestResults[index] || {
        pest: 'Healthy',
        confidence: '94%',
        risk: 'Low',
      }),
    };
  });

  const affectedNodes = nodes.filter(
    (item) => item.pest !== 'Healthy'
  ).length;

  const healthyNodes = nodeCount - affectedNodes;

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View
        style={[
            styles.header,
            {
            paddingTop: insets.top,
            height: 68 + insets.top,
            },
        ]}
        >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.replace('/pest-result')}
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color="#1B5E20"
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Pest Detection Summary</Text>

        <View style={{ width: 42 }} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* LAND CARD */}
        <View style={styles.landCard}>
          <View style={styles.landIcon}>
            <Ionicons
              name="map"
              size={25}
              color="#1B5E20"
            />
          </View>

          <View style={styles.landInfo}>
            <Text style={styles.landLabel}>SELECTED LAND</Text>
            <Text style={styles.landName}>{landName}</Text>
            <Text style={styles.landSub}>
              Node-wise pest analysis
            </Text>
          </View>

          <View style={styles.completeBadge}>
            <Ionicons
              name="checkmark-circle"
              size={15}
              color="#2E7D32"
            />
            <Text style={styles.completeText}>COMPLETE</Text>
          </View>
        </View>

        {/* TITLE */}
        <Text style={styles.sectionTitle}>
          Pest Detection Overview
        </Text>

        <Text style={styles.sectionSubtitle}>
          AI analysis results across all monitored nodes
        </Text>

        {/* SUMMARY CARDS */}
        <View style={styles.summaryRow}>
          <View style={styles.summaryCard}>
            <View
              style={[
                styles.summaryIcon,
                { backgroundColor: '#E8F5E9' },
              ]}
            >
              <Ionicons
                name="leaf"
                size={21}
                color="#2E7D32"
              />
            </View>

            <Text style={styles.summaryNumber}>
              {healthyNodes}
            </Text>

            <Text style={styles.summaryLabel}>
              Healthy Nodes
            </Text>
          </View>

          <View style={styles.summaryCard}>
            <View
              style={[
                styles.summaryIcon,
                { backgroundColor: '#FFF3E0' },
              ]}
            >
              <Ionicons
                name="bug"
                size={21}
                color="#EF6C00"
              />
            </View>

            <Text style={styles.summaryNumber}>
              {affectedNodes}
            </Text>

            <Text style={styles.summaryLabel}>
              Affected Nodes
            </Text>
          </View>
        </View>

        {/* ALERT */}
        {affectedNodes > 0 && (
          <View style={styles.alertCard}>
            <View style={styles.alertIcon}>
              <Ionicons
                name="warning"
                size={22}
                color="#E65100"
              />
            </View>

            <View style={styles.alertContent}>
              <Text style={styles.alertTitle}>
                Pest Activity Detected
              </Text>

              <Text style={styles.alertText}>
                {affectedNodes} node
                {affectedNodes > 1 ? 's show' : ' shows'} signs of
                pest activity. Review the affected nodes and take
                appropriate action.
              </Text>
            </View>
          </View>
        )}

        {/* TABLE */}
        <View style={styles.tableCard}>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableHeaderText, styles.nodeColumn]}>
              Node
            </Text>

            <Text
              style={[
                styles.tableHeaderText,
                styles.pestColumn,
              ]}
            >
              Detected Pest
            </Text>

            <Text
              style={[
                styles.tableHeaderText,
                styles.confidenceColumn,
              ]}
            >
              Confidence
            </Text>

            <Text style={[styles.tableHeaderText, styles.riskColumn]}>
              Risk
            </Text>
          </View>

          {nodes.map((item, index) => {
            const healthy = item.pest === 'Healthy';

            return (
              <View
                key={item.node}
                style={[
                  styles.tableRow,
                  index === nodes.length - 1 &&
                    styles.lastTableRow,
                ]}
              >
                {/* NODE */}
                <View style={styles.nodeColumn}>
                  <View style={styles.nodeBadge}>
                    <Text style={styles.nodeBadgeText}>
                      N{item.node}
                    </Text>
                  </View>
                </View>

                {/* PEST */}
                <View style={styles.pestColumn}>
                  <View style={styles.pestNameRow}>
                    <Ionicons
                      name={
                        healthy
                          ? 'checkmark-circle'
                          : 'bug'
                      }
                      size={17}
                      color={
                        healthy
                          ? '#2E7D32'
                          : '#EF6C00'
                      }
                    />

                    <Text
                      style={[
                        styles.pestText,
                        healthy &&
                          styles.healthyText,
                      ]}
                      numberOfLines={2}
                    >
                      {item.pest}
                    </Text>
                  </View>
                </View>

                {/* CONFIDENCE */}
                <View style={styles.confidenceColumn}>
                  <Text style={styles.confidenceText}>
                    {item.confidence}
                  </Text>
                </View>

                {/* RISK */}
                <View style={styles.riskColumn}>
                  <View
                    style={[
                      styles.riskBadge,
                      healthy
                        ? styles.lowRisk
                        : item.risk === 'High'
                          ? styles.highRisk
                          : styles.moderateRisk,
                    ]}
                  >
                    <Text
                      style={[
                        styles.riskText,
                        healthy
                          ? styles.lowRiskText
                          : item.risk === 'High'
                            ? styles.highRiskText
                            : styles.moderateRiskText,
                      ]}
                    >
                      {item.risk}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>

        {/* AI INFORMATION */}
        <View style={styles.aiCard}>
          <View style={styles.aiIcon}>
            <Ionicons
              name="sparkles"
              size={21}
              color="#1B5E20"
            />
          </View>

          <View style={styles.aiContent}>
            <Text style={styles.aiTitle}>
              AI Analysis Complete
            </Text>

            <Text style={styles.aiText}>
              Images captured by node cameras were processed by
              the pest detection model. The detected pest,
              confidence and risk level are stored against each
              node for future monitoring.
            </Text>
          </View>
        </View>

        {/* ACTION */}
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.replace('/pest')}
        >
          <Ionicons
            name="map-outline"
            size={20}
            color="#FFFFFF"
          />

          <Text style={styles.primaryButtonText}>
            CHECK ANOTHER LAND
          </Text>
        </TouchableOpacity>

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
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E8EDE8',
    },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#263238',
  },

  scrollContent: {
    padding: 16,
  },

  landCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22,
    borderWidth: 1,
    borderColor: '#E1EAE1',
  },

  landIcon: {
    width: 50,
    height: 50,
    borderRadius: 14,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  landInfo: {
    flex: 1,
  },

  landLabel: {
    fontSize: 9,
    fontWeight: '800',
    color: '#78909C',
    letterSpacing: 0.6,
  },

  landName: {
    fontSize: 17,
    fontWeight: '800',
    color: '#263238',
    marginTop: 2,
  },

  landSub: {
    fontSize: 11,
    color: '#78909C',
    marginTop: 3,
  },

  completeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 10,
    gap: 4,
  },

  completeText: {
    fontSize: 9,
    fontWeight: '800',
    color: '#2E7D32',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#263238',
  },

  sectionSubtitle: {
    fontSize: 12,
    color: '#78909C',
    marginTop: 4,
    marginBottom: 16,
  },

  summaryRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },

  summaryCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5ECE5',
  },

  summaryIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },

  summaryNumber: {
    fontSize: 25,
    fontWeight: '900',
    color: '#263238',
  },

  summaryLabel: {
    fontSize: 11,
    color: '#78909C',
    marginTop: 2,
    fontWeight: '600',
  },

  alertCard: {
    backgroundColor: '#FFF8E1',
    borderRadius: 16,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#FFE0B2',
  },

  alertIcon: {
    width: 40,
    height: 40,
    borderRadius: 11,
    backgroundColor: '#FFE0B2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 11,
  },

  alertContent: {
    flex: 1,
  },

  alertTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#E65100',
  },

  alertText: {
    fontSize: 11,
    lineHeight: 17,
    color: '#795548',
    marginTop: 4,
  },

  tableCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E1EAE1',
    marginBottom: 18,
  },

  tableHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F6F1',
    paddingVertical: 13,
    paddingHorizontal: 10,
  },

  tableHeaderText: {
    fontSize: 9,
    fontWeight: '800',
    color: '#546E7A',
    textTransform: 'uppercase',
  },

  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 62,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: '#EEF2EE',
  },

  lastTableRow: {
    borderBottomWidth: 0,
  },

  nodeColumn: {
    width: 48,
  },

  pestColumn: {
    flex: 1.5,
  },

  confidenceColumn: {
    width: 65,
    alignItems: 'center',
  },

  riskColumn: {
    width: 62,
    alignItems: 'center',
  },

  nodeBadge: {
    width: 34,
    height: 30,
    borderRadius: 9,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  nodeBadgeText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#1B5E20',
  },

  pestNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 4,
    gap: 6,
  },

  pestText: {
    flex: 1,
    fontSize: 10,
    fontWeight: '700',
    color: '#37474F',
  },

  healthyText: {
    color: '#2E7D32',
  },

  confidenceText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#37474F',
  },

  riskBadge: {
    minWidth: 50,
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 8,
    alignItems: 'center',
  },

  riskText: {
    fontSize: 8,
    fontWeight: '800',
  },

  lowRisk: {
    backgroundColor: '#E8F5E9',
  },

  moderateRisk: {
    backgroundColor: '#FFF3E0',
  },

  highRisk: {
    backgroundColor: '#FFEBEE',
  },

  lowRiskText: {
    color: '#2E7D32',
  },

  moderateRiskText: {
    color: '#EF6C00',
  },

  highRiskText: {
    color: '#C62828',
  },

  aiCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 15,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E1EAE1',
    marginBottom: 18,
  },

  aiIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  aiContent: {
    flex: 1,
  },

  aiTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#263238',
  },

  aiText: {
    fontSize: 11,
    lineHeight: 17,
    color: '#607D8B',
    marginTop: 4,
  },

  primaryButton: {
    height: 52,
    borderRadius: 14,
    backgroundColor: '#1B5E20',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
});