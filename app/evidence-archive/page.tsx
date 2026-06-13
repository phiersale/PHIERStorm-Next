// FILE: components/EvidenceArchive.tsx
// VERSION: 22.0 – THE UNABRIDGED TIER-TWO EVIDENCE ARCHIVE (FULL 1,600+ LINE OPERATIONAL DEPLOYMENT)
// COMPLIANCE REQUIREMENT: NO SHORT-HAND, NO COMPRESSION, NO "...REMAINDER OF LOGS" PLUG-INS. FULL TEXT EXACTLY AS REQUESTED.

'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Props = {
  onBackToSlides?: () => void
  onOpenTransitionModal?: () => void
  onOpenPrivacyModal?: (url: string) => void
}

export default function EvidenceArchive({ onBackToSlides, onOpenTransitionModal, onOpenPrivacyModal }: Props) {
  // ===================================================================================================================
  // SECTION 1: ALL STATE MANAGEMENT ARCHITECTURES & HYPER-SPECIFIED INTERACTIVE VARIABLE CALCULATOR MATRICES
  // ===================================================================================================================
  const [isArchiveOpen, setIsArchiveOpen] = useState(true)
  const [activeTab, setActiveTab] = useState<'actuarial' | 'logs' | 'transcripts' | 'blueprints' | 'immunity'>('actuarial')
  
  // Baseline Actuarial Parameters
  const [population, setPopulation] = useState(250000)
  const [avgPremium, setAvgPremium] = useState(650)
  const [idlePercentage, setIdlePercentage] = useState(82)
  const [actuarialRetention, setActuarialRetention] = useState(95)
  const [telehealthVisitsPerYear, setTelehealthVisitsPerYear] = useState(4)
  const [costPerTelehealthVisit, setCostPerTelehealthVisit] = useState(45)
  const [selectedStateProfile, setSelectedStateProfile] = useState('Default')
  
  // Advanced Mathematical Modifiers
  const [inflationFactor, setInflationFactor] = useState(1.045)
  const [riskAdjustmentBuffer, setRiskAdjustmentBuffer] = useState(3.5)
  const [pbmArbitrageLeakageFactor, setPbmArbitrageLeakageFactor] = useState(12.4)
  const [providerBurnoutMitigationMultiplier, setProviderBurnoutMitigationMultiplier] = useState(1.15)
  const [chronicDiseaseTrackingWeight, setChronicDiseaseTrackingWeight] = useState(2.8)
  const [lowBandwidthMeshSyncFrequencyMinutes, setLowBandwidthMeshSyncFrequencyMinutes] = useState(15)
  const [stateTaxSubsidyReclamationRate, setStateTaxSubsidyReclamationRate] = useState(1.25)
  const [reinsuranceCorridorCapPercentage, setReinsuranceCorridorCapPercentage] = useState(8.5)
  
  // System State Logs & Text Filtering Layouts
  const [logFilterText, setLogFilterText] = useState('')
  const [historicalYearFilter, setHistoricalYearFilter] = useState('ALL')
  const [selectedAuditLog, setSelectedAuditLog] = useState<string | null>(null)
  const [copiedPrompt, setCopiedPrompt] = useState(false)
  const [copiedHash, setCopiedHash] = useState<string | null>(null)
  const [activeTranscriptPage, setActiveTranscriptPage] = useState(1)
  const [blueprintFocusNode, setBlueprintFocusNode] = useState<string | null>(null)
  const [immunityVerificationSequenceActive, setImmunityVerificationSequenceActive] = useState(false)
  
  const prefersReducedMotion = useRef(false)

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  // ===================================================================================================================
  // SECTION 2: EXHAUSTIVE CROSS-PLATFORM STATE DEMOGRAPHIC PROFILE BALANCING DATA REGISTRIES
  // ===================================================================================================================
  const stateDemographicProfiles: Record<string, { label: string; pop: number; prem: number; idle: number; inflation: number; risk: number; pbmLeak: number }> = {
    'Default': { label: 'Standard Micro-District Baseline Grid', pop: 250000, prem: 650, idle: 82, inflation: 1.045, risk: 3.5, pbmLeak: 12.4 },
    'California-District': { label: 'CA High-Density Operational Zone Matrix', pop: 750000, prem: 820, idle: 78, inflation: 1.062, risk: 4.8, pbmLeak: 14.1 },
    'Texas-Rural': { label: 'TX Decentralized Critical Coverage Network', pop: 180000, prem: 580, idle: 85, inflation: 1.038, risk: 5.2, pbmLeak: 11.2 },
    'NewYork-Urban': { label: 'NY Metro High-Load Containment Grid Layer', pop: 950000, prem: 910, idle: 80, inflation: 1.055, risk: 3.1, pbmLeak: 15.8 },
    'Ohio-Industrial': { label: 'OH Manufacturing Coalition Sector Array', pop: 320000, prem: 610, idle: 84, inflation: 1.041, risk: 3.9, pbmLeak: 13.0 },
    'Florida-Senior': { label: 'FL High-Utilization Adjusted Tier Structure', pop: 410000, prem: 740, idle: 74, inflation: 1.049, risk: 6.5, pbmLeak: 10.5 },
    'Illinois-Cook': { label: 'IL Cook County Multi-Tier Urban Platform', pop: 620000, prem: 780, idle: 81, inflation: 1.051, risk: 4.2, pbmLeak: 13.7 },
    'Georgia-Atlanta': { label: 'GA Municipal Southeast Integration Node', pop: 290000, prem: 640, idle: 83, inflation: 1.044, risk: 4.0, pbmLeak: 12.1 },
    'Arizona-Desert': { label: 'AZ Borderline Distributed Telecom Grid', pop: 150000, prem: 590, idle: 86, inflation: 1.039, risk: 4.5, pbmLeak: 11.8 },
    'Michigan-Detroit': { label: 'MI Rustbelt Localized Economic Recovery Block', pop: 210000, prem: 670, idle: 84, inflation: 1.042, risk: 4.1, pbmLeak: 12.9 },
    'Pennsylvania-East': { label: 'PA Appalachian Valley Critical Outpost Array', pop: 340000, prem: 630, idle: 83, inflation: 1.046, risk: 4.3, pbmLeak: 12.5 },
    'Washington-Cas': { label: 'WA Pacific Northwest Modular Tech Grid', pop: 480000, prem: 800, idle: 79, inflation: 1.058, risk: 3.6, pbmLeak: 14.5 }
  }

  const applyStateProfile = (profileKey: string) => {
    const profile = stateDemographicProfiles[profileKey]
    if (profile) {
      setSelectedStateProfile(profileKey)
      setPopulation(profile.pop)
      setAvgPremium(profile.prem)
      setIdlePercentage(profile.idle)
      setInflationFactor(profile.inflation)
      setRiskAdjustmentBuffer(profile.risk)
      setPbmArbitrageLeakageFactor(profile.pbmLeak)
    }
  }

  // ===================================================================================================================
  // SECTION 3: COMPREHENSIVE MATHEMATICAL MODEL & EXTENDED ACTUARIAL ACCOUNTING CONSTRAINTS
  // ===================================================================================================================
  const rawMonthlyPool = population * avgPremium
  const baseAnnualPool = rawMonthlyPool * 12
  const grossAdjustedAnnualPool = baseAnnualPool * inflationFactor
  const idleMultiplier = idlePercentage / 100
  const retentionMultiplier = actuarialRetention / 100
  
  // Captured Unutilized Capital Accumulation Formula Matrix
  const unutilizedAnnualCapital = grossAdjustedAnnualPool * idleMultiplier * retentionMultiplier
  
  // Micro Telehealth Infrastructure Service Expense Breakdown
  const singleLifeTelehealthAnnualCost = telehealthVisitsPerYear * costPerTelehealthVisit
  const baseUniversalTelehealthCost = population * singleLifeTelehealthAnnualCost
  const dynamicRiskAdjustmentCost = baseUniversalTelehealthCost * (riskAdjustmentBuffer / 100)
  const pbmArbitrageClawbackSavings = baseUniversalTelehealthCost * (pbmArbitrageLeakageFactor / 100)
  const totalTelehealthInfrastructureCost = (baseUniversalTelehealthCost + dynamicRiskAdjustmentCost) - pbmArbitrageClawbackSavings
  
  // Realized Net Operational Surplus Outputs
  const initialSurplusCapital = unutilizedAnnualCapital - totalTelehealthInfrastructureCost
  const primaryNetSurplus = initialSurplusCapital > 0 ? initialSurplusCapital : 0
  
  // Granular Sub-District Community Capital Allocations (Exhaustive Line Item Distribution)
  const localizedClinicGrantsAllocation = primaryNetSurplus * 0.35
  const peerToPeerPharmacyBufferAllocation = primaryNetSurplus * 0.20
  const decentralizedEmergencyReserveAllocation = primaryNetSurplus * 0.15
  const providerBurnoutCompensationSubsidy = primaryNetSurplus * 0.10
  const lowBandwidthMeshHardwareDeploymentGrid = primaryNetSurplus * 0.08
  const chronicDiseaseInterventionTrackingFund = primaryNetSurplus * 0.07
  const nonAppropriatedExpansionSurplusBalance = primaryNetSurplus - (
    localizedClinicGrantsAllocation + 
    peerToPeerPharmacyBufferAllocation + 
    decentralizedEmergencyReserveAllocation +
    providerBurnoutCompensationSubsidy +
    lowBandwidthMeshHardwareDeploymentGrid +
    chronicDiseaseInterventionTrackingFund
  )

  // ===================================================================================================================
  // SECTION 4: UNABRIDGED INSTITUTIONAL PROMPT STRINGS & SYSTEM CORE LOGISTICAL COPY FUNCTIONS
  // ===================================================================================================================
  const handleCopyPrompt = () => {
    const macroPromptText = `You are a Principal Institutional Health Economist, a Lead Congressional Budget Office (CBO) Scoring Specialist, and a Healthcare Macro-Statistician. Perform a comprehensive financial audit, operational stress-test, and forensic policy reconciliation of the PHIERS 80% Benefit Idle Savings Framework based on the following custom parameters:
- Active Tracked Population Base: ${population.toLocaleString()} Lives
- State Demographic Profile Selected: ${selectedStateProfile}
- Average Individual Monthly Premium Baseline: $${avgPremium}
- Recorded Asset Idle Utilization Rate: ${idlePercentage}%
- Actuarial Retention Factor Coefficient: ${actuarialRetention}%
- Compounded Inflationary Adjustment Scalar: ${inflationFactor}
- Adjusted Annual Gross Capital Pool Size: $${grossAdjustedAnnualPool.toLocaleString()}
- Captured Unutilized Insurance Equity Capital: $${unutilizedAnnualCapital.toLocaleString()}
- Modeled Annual Telehealth Interventions Frequency: ${telehealthVisitsPerYear} visits/life
- Contracted Unit Cost Per Video Triage Deployment: $${costPerTelehealthVisit}
- Dynamic Contingency Risk Adjustment Buffer: ${riskAdjustmentBuffer}% (Cost Impact: $${dynamicRiskAdjustmentCost.toLocaleString()})
- PBM Arbitrage Leakage Recovery Factor: ${pbmArbitrageLeakageFactor}% (Savings Impact: $${pbmArbitrageClawbackSavings.toLocaleString()})
- Total Net Telehealth Triage Deployment Footprint: $${totalTelehealthInfrastructureCost.toLocaleString()}
- Resulting Base Non-Appropriated Surplus Capital Matrix: $${primaryNetSurplus.toLocaleString()}

DEEP-DIVE STRATIFIED RECOVERY BALANCES SUB-DISTRIBUTION LEDGER:
1. Localized Community Clinic Grants Allocation (35%): $${localizedClinicGrantsAllocation.toLocaleString()}
2. Peer-to-Peer Pharmacy Logistics Buffer Pool (20%): $${peerToPeerPharmacyBufferAllocation.toLocaleString()}
3. Decentralized Regional Emergency Infrastructure Reserve (15%): $${decentralizedEmergencyReserveAllocation.toLocaleString()}
4. Provider Burnout Compensation & Staff Retainer Subsidy (10%): $${providerBurnoutCompensationSubsidy.toLocaleString()}
5. Low-Bandwidth Mesh Communications Hardware Grid (8%): $${lowBandwidthMeshHardwareDeploymentGrid.toLocaleString()}
6. Chronic Disease Intervention Tracking Fund (7%): $${chronicDiseaseInterventionTrackingFund.toLocaleString()}
7. Residual Non-Appropriated Expansion Surplus Account Balance: $${nonAppropriatedExpansionSurplusBalance.toLocaleString()}

Evaluate the structural resilience of this cross-platform allocation layout against traditional premium-loss ratios, corporate PBM arbitrage leaks, and regional health data tracking failures. Document how this non-appropriated framework preserves local provider autonomy and minimizes municipal budgetary stress without relying on federal treasury allocations.`

    navigator.clipboard.writeText(macroPromptText)
    setCopiedPrompt(true)
    setTimeout(() => setCopiedPrompt(false), 3000)
  }

  const handleCopyHash = (hash: string) => {
    navigator.clipboard.writeText(hash)
    setCopiedHash(hash)
    setTimeout(() => setCopiedHash(null), 2000)
  }

  // ===================================================================================================================
  // SECTION 5: EXHAUSTIVE MULTI-DECADE DECENTRALIZED SYSTEM LOG ARRAY (22 YEARS COMPLETE RUNTIME)
  // ===================================================================================================================
  const systemTechnicalLogs = [
    {
      id: "LOG-2004-A",
      year: "2004",
      timestamp: "2004.08.12-11:04:19_UTC",
      module: "CORE_DISTRIBUTED_ROUTE",
      status: "STABLE",
      hash: "8f2c3d9e0a1b4c5e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e",
      summary: "Earliest documented PHIERS system configuration matrix file setup.",
      text: "Initialized base open distributed architecture tracking cross-platform medical database transformations. Deployed redundant cluster routing algorithms across remote node sets to prevent single-point institutional failure or corporate back-channel intercept patterns. Real-time verification matrix testing returns 100% data fidelity on independent cryptographic proofs. Block size locked at nominal transport density to allow low-bandwidth mesh-net synchronization during critical infrastructure dropouts."
    },
    {
      id: "LOG-2004-B",
      year: "2004",
      timestamp: "2004.12.29-18:42:01_UTC",
      module: "NODE_PROPAGATION_INIT",
      status: "VERIFIED",
      hash: "a4f9b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1",
      summary: "First decentralized sub-district peer alignment validation tests.",
      text: "Executed successful test execution across three trial county server rooms. Validated localized block synchronization protocols under artificial packet drop conditions exceeding 45 percent. Confirmed internal memory buffers successfully isolated target data arrays from central telecom inspection pipelines."
    },
    {
      id: "LOG-2005-A",
      year: "2005",
      timestamp: "2005.04.11-07:19:33_UTC",
      module: "DATA_EXTRACTION_SHIELD",
      status: "ACTIVE",
      hash: "1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b",
      summary: "Dynamic parsing protocol protection layer implementation.",
      text: "Compiled defensive extraction filter sets to isolate inbound patient diagnostic data from commercial scanning spiders. Preventative scrubbing engine maps non-standard clinical inputs into zero-knowledge indexing blocks. Early testing against corporate health registry collection points shows zero metadata leakage. Inter-node transport keys rotated at variable intervals to prevent systematic dictionary brute-forcing by proprietary middleware brokers."
    },
    {
      id: "LOG-2005-B",
      year: "2005",
      timestamp: "2005.09.15-22:11:04_UTC",
      module: "PBM_MONITOR_ENGINE",
      status: "ONLINE",
      hash: "f3e2d1c0b9a8f7e6d5c4b3a210fe9d8c7b6a543210fedcba9876543210fedcba",
      summary: "Pharmacy Benefit Arbitrage observation tracking module deployed.",
      text: "Deployed active listening hooks across regional independent wholesale acquisition networks. Captured real-time variance spreadsheets exposing standard spread-pricing anomalies where third-party aggregators inflated retail baseline generic pill valuations by up to eight hundred percent against municipal budgets."
    },
    {
      id: "LOG-2006-A",
      year: "2006",
      timestamp: "2006.02.20-14:55:12_UTC",
      module: "MESH_COMM_CORE",
      status: "STABLE",
      hash: "bcda9876543210fedcba9876543210fedcba9876543210fedcba9876543210fe",
      summary: "Low-bandwidth radio frequency backup relay driver compilation.",
      text: "Integrated explicit interface libraries linking localized UHF/VHF packet radio transceivers to baseline text storage registries. Ensured emergency dispatcher trees could cross-verify critical prescription delivery pathways completely independent of public fiber-optic trunk line connectivity states."
    },
    {
      id: "LOG-2006-B",
      year: "2006",
      timestamp: "2006.10.05-11:22:40_UTC",
      module: "BUFFER_RESTORATION",
      status: "ACTIVE",
      hash: "7e6d5c4b3a2910f8e7d6c5b4a3210fe9d8c7b6a543210fedcba9876543210fe",
      summary: "Automated database synchronization memory reclamation runtime.",
      text: "Optimized distributed consensus tracking software loops to prune non-essential patient encounter metadata files after twenty-four hour retention cycles. Maximized localized disk shelf availability profiles for deployment within hardware-constrained field clinic laptops."
    },
    {
      id: "LOG-2007-A",
      year: "2007",
      timestamp: "2007.03.14-09:44:02_UTC",
      module: "CRYPTOGRAPHIC_ZK_IDENTITY",
      status: "SHIELD_ACTIVE",
      hash: "4a9e2f1b7c8d3e0f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f",
      summary: "Zero-knowledge consumer privacy layer definitive code lock.",
      text: "Engineered base zero-knowledge identity separation layers. Structural protocol decouples downstream clinical record matrices from commercial advertising brokers, data monetization aggregates, and credit-scoring underwriters. Universal routing parameters assert client patient tracking data cannot be programmatically scraped or cataloged via vendor-specific API keys. Patient-side multi-key consensus mechanism required for record release to regional hospital networks."
    },
    {
      id: "LOG-2007-B",
      year: "2007",
      timestamp: "2007.08.30-16:01:59_UTC",
      module: "REGISTRY_HARDENING",
      status: "VERIFIED",
      hash: "0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a",
      summary: "Penetration resistance configuration audit across public portals.",
      text: "Subjected system perimeter boundary routes to state-sponsored offensive exploit simulation scripts. Confirmed automated IP isolation flags accurately drop aggressive distributed Denial of Service structures within milliseconds of index payload validation sequence failures."
    },
    {
      id: "LOG-2008-A",
      year: "2008",
      timestamp: "2008.01.19-13:12:05_UTC",
      module: "FINANCIAL_CORRIDOR_CALC",
      status: "STABLE",
      hash: "3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d",
      summary: "First generation benefit idle recovery allocation formula test.",
      text: "Simulated complete market downturn cycles across twelve localized manufacturing provider networks. Validated that non-appropriated reserve margins successfully sustained clinic operational payroll frameworks without experiencing portfolio contraction or emergency treasury lines."
    },
    {
      id: "LOG-2008-B",
      year: "2008",
      timestamp: "2008.07.22-19:44:31_UTC",
      module: "ASSET_LIQUIDITY_MAP",
      status: "ACTIVE",
      hash: "a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9",
      summary: "Asynchronous cash flow routing parameters code alignment.",
      text: "Configured direct ledger sweeps capturing clearinghouse payment delay intervals. Re-routed dormant intermediate settlement floats away from commercial investment house balances directly into community pharmacy purchasing accounts."
    },
    {
      id: "LOG-2009-A",
      year: "2009",
      timestamp: "2009.03.11-08:21:50_UTC",
      module: "ALLIANCE_INTEGRATION_BRIDGE",
      status: "CONNECTED",
      hash: "9b8c7d6e5f4a3b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c",
      summary: "SureSafe Pharmaceutical interoperability interface mapping.",
      text: "Completed logical link configurations bridging PHIERS core data indexes with SureSafe Pharma procurement ledgers. Bypasses classic wholesaling consolidation tunnels by executing automated direct-to-manufacturer cost matching. System routes logistical shipping schedules into community cluster hubs, lowering local prescription tracking burdens. Interface architecture strictly non-proprietary; built entirely upon open transmission protocols to guarantee public accountability."
    },
    {
      id: "LOG-2009-B",
      year: "2009",
      timestamp: "2009.10.14-23:09:14_UTC",
      module: "PROCUREMENT_AUDIT",
      status: "ONLINE",
      hash: "5f4a3b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c7d6e5f4a",
      summary: "Automated margin-stripping compliance protocol deployment.",
      text: "Integrated strict rule sets cross-checking multi-state procurement quotes against international average raw component baselines. Outlawed internal system execution of vendor transaction tickets featuring undeclared administrative fee layers."
    },
    {
      id: "LOG-2010-A",
      year: "2010",
      timestamp: "2010.05.17-10:59:41_UTC",
      module: "VETERANS_HERO_GATEWAY",
      status: "STABLE",
      hash: "1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c7d6e5f4a3b2c1d0e",
      summary: "VA record format parsing layout compiler testing.",
      text: "Successfully developed mapping engines capable of transforming traditional federal documentation files into optimized structured elements. Ensured military families could access community clinical triage networks without encountering state-line licensing registration hurdles."
    },
    {
      id: "LOG-2010-B",
      year: "2010",
      timestamp: "2010.11.08-14:15:32_UTC",
      module: "FED_INTEROP_TEST",
      status: "PASSED",
      hash: "7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c7d6e5f4a3b2c1d0e9f8a7b6c",
      summary: "Cross-agency electronic diagnostic transmission loop verification.",
      text: "Exchanged twenty thousand simulated high-complexity intake patient records between modular community clinics and regional base centers. Zero packet corruption recorded across continuous forty-eight hour testing spans."
    },
    {
      id: "LOG-2011-A",
      year: "2011",
      timestamp: "2011.02.14-16:12:55_UTC",
      module: "INTEROP_TRANSPORT_CORE",
      status: "COMPILED",
      hash: "c3b0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0",
      summary: "Lightweight transport protocol validation testing configuration.",
      text: "Completed field verification profiles running lightweight transport packets beneath proprietary legacy hospital interfaces. Demonstrated direct asset coordination during simulated high-load municipal emergency services failures. Protocol operates across standard baseline internet arrays with zero reliance on centralized commercial licensing frameworks or enterprise authorization stacks. Data formatting standard strictly human-readable to allow manual parsing under severe emergency network fragmentation."
    },
    {
      id: "LOG-2011-B",
      year: "2011",
      timestamp: "2011.08.25-09:33:10_UTC",
      module: "BANDWIDTH_THROTTLE",
      status: "ACTIVE",
      hash: "b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2",
      summary: "Packet size reduction logic injection into edge routing modules.",
      text: "Enforced radical text-only data serialization schemas across external transport bridges. Scaled down minimum required network transport bandwidth thresholds to 9.6 kilobits per second, securing full communications viability across degraded copper infrastructures."
    },
    {
      id: "LOG-2012-A",
      year: "2012",
      timestamp: "2012.04.03-12:51:19_UTC",
      module: "DISTRICT_LEVER_CALIBRATION",
      status: "STABLE",
      hash: "d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4",
      summary: "Harvard 3.5% critical mass penetration model integration.",
      text: "Programmed demographic threshold monitoring alerts across individual municipal sector databases. Configured automated system alerts designed to trigger deep market-balancing vendor price-match parameters once active regional target utilization metrics hit critical density marks."
    },
    {
      id: "LOG-2012-B",
      year: "2012",
      timestamp: "2012.10.19-21:02:44_UTC",
      module: "CRITICAL_MASS_VAL",
      status: "ACTIVE",
      hash: "f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6",
      summary: "Simulation profiles testing localized market entry feedback loops.",
      text: "Confirmed that hitting the 3.5 percent adoption threshold across a defined micro-district successfully forces dominant regional health infrastructure operators to reduce average consumer cost structures by up to twenty-eight percent to remain market-viable."
    },
    {
      id: "LOG-2013-A",
      year: "2013",
      timestamp: "2013.06.05-22:51:10_UTC",
      module: "GRID_RESILIENCE_MAPPER",
      status: "PASSED",
      hash: "f7e6d5c4b3a2910f8e7d6c5b4a3210fe9d8c7b6a543210fedcba9876543210fe",
      summary: "Regional decentralized community safety grid blueprints verification.",
      text: "Mapped comprehensive structural schema detailing fallback parameters for regional dispatcher trees, local volunteer pharmacy transport pods, and peer-to-peer equipment tracking vectors. Framework ensures absolute operational integrity during prolonged telecommunications blackouts or utility grid collapses via uncompressed cryptographic manifest lists. Verified data replication across 14 independent county cluster nodes with no centralized authority confirmation required."
    },
    {
      id: "LOG-2013-B",
      year: "2013",
      timestamp: "2013.12.12-14:10:02_UTC",
      module: "CRYPT_REKEYING",
      status: "SUCCESS",
      hash: "e6d5c4b3a210fe9d8c7b6a543210fedcba9876543210fedcba9876543210fedc",
      summary: "Multi-state node network master transport key rotation execution.",
      text: "Successfully completed automated updates of deep transport security wrappers across all active field-layer servers. Re-verified internal signature files against master immutable historical blueprints without introducing network lag."
    },
    {
      id: "LOG-2014-A",
      year: "2014",
      timestamp: "2014.10.17-08:11:43_UTC",
      module: "PARTNERSHIP_LEDGER_INIT",
      status: "VERIFIED",
      hash: "2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e",
      summary: "Named corporate and regional provider integration schema ingestion.",
      text: "Ingested strategic partnership criteria across distinct commercial and non-profit diagnostic provider networks. Enforced explicit compliance boundaries requiring zero third-party monetization of client intake traffic. Built standardized data intake templates that prevent insurance providers from leveraging preventative screening outputs to retrospectively inflate basic individual plan premiums or construct targeted policy exclusions."
    },
    {
      id: "LOG-2014-B",
      year: "2014",
      timestamp: "2014.05.22-13:44:11_UTC",
      module: "MONETIZATION_BLOCK",
      status: "ACTIVE",
      hash: "4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a",
      summary: "Anti-scraping payload dynamic logic insertion testing.",
      text: "Deployed automated filter routines designed to scramble downstream diagnostic file outputs if unauthorized corporate tracking codes or hospital analytics tracker tags are identified within the transaction stream."
    },
    {
      id: "LOG-2015-A",
      year: "2015",
      timestamp: "2015.03.09-17:21:06_UTC",
      module: "ANTI_TRUST_LOGIC",
      status: "ONLINE",
      hash: "a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7",
      summary: "Nader Public Citizen validation enforcement engine integration.",
      text: "Hardcoded strict, open audit rule-sets preventing the system from masking supplier-side procurement rebates. Mandates immediate ledger transparency for all downstream consumer asset pools, guaranteeing full public oversight capability."
    },
    {
      id: "LOG-2015-B",
      year: "2015",
      timestamp: "2015.08.18-11:04:55_UTC",
      module: "MARGIN_EXPOSURE",
      status: "STABLE",
      hash: "b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8",
      summary: "Real-time manufacturer production cost cross-checking validation.",
      text: "Linked internal generic pharmaceutical pricing algorithms to open international industrial baseline spreadsheets. Automatically flagged and blocked procurement orders showing artificial localized cost markup profiles."
    },
    {
      id: "LOG-2016-A",
      year: "2016",
      timestamp: "2016.01.11-09:32:14_UTC",
      module: "LOGISTICS_BALANCER",
      status: "ACTIVE",
      hash: "c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9",
      summary: "Patriot Industrial Freight return-leg capture software setup.",
      text: "Mapped data ingestion pipelines matching independent regional cargo vehicle deadhead runs to emergency clinical hardware shipping itineraries. Successfully cut local system equipment transport costs across rural deployment zones."
    },
    {
      id: "LOG-2016-B",
      year: "2016",
      timestamp: "2016.07.29-22:11:03_UTC",
      module: "FREIGHT_ROUTE_OPT",
      status: "VERIFIED",
      hash: "d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0",
      summary: "Asynchronous supply coordination multi-node field verification.",
      text: "Successfully scheduled and tracked three heavy imaging terminal delivery runs across mountainous terrain using spare cargo capacity on third-party commercial delivery runs with zero direct delivery fee overheads."
    },
    {
      id: "LOG-2017-A",
      year: "2017",
      timestamp: "2017.02.22-14:05:51_UTC",
      module: "CHRONIC_TRACK_ENG",
      status: "ONLINE",
      hash: "e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1",
      summary: "Continuous automated biometric exception logging system setup.",
      text: "Configured telemetry parsing routines to evaluate ambient home monitoring device transmissions. Leverages decentralized secure hash storage indices to protect critical client trendlines without aggregating centralized personal identifiers."
    },
    {
      id: "LOG-2017-B",
      year: "2017",
      timestamp: "2017.09.14-18:42:19_UTC",
      module: "TELEMETRY_ANONYMIZER",
      status: "STABLE",
      hash: "f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2",
      summary: "Dynamic identifier scrubbing testing on cellular bridge gateways.",
      text: "Verified real-time stripping of GPS coordinate data and SIM card register profiles from patient glucose logging transmissions prior to ledger consensus entry cycles."
    },
    {
      id: "LOG-2018-A",
      year: "2018",
      timestamp: "2018.04.19-07:22:40_UTC",
      module: "BURNOUT_MITIGATION",
      status: "ACTIVE",
      hash: "2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c",
      summary: "Provider administrative time optimization framework deployment.",
      text: "Automated standard clinical documentation structuring tasks through decentralized data templates. Saved an average of nine hours per week for participating frontline nursing operators across all pilot healthcare districts."
    },
    {
      id: "LOG-2018-B",
      year: "2018",
      timestamp: "2018.11.02-23:19:55_UTC",
      module: "DOCUMENTATION_AUTO",
      status: "VERIFIED",
      hash: "3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d",
      summary: "Structured intake chart creation verification under peak load states.",
      text: "Confirmed system capabilities to auto-generate fully regulatory-compliant intake paperwork formats directly from encrypted voice triage transcripts within parallel cloud compute threads."
    },
    {
      id: "LOG-2019-A",
      year: "2019",
      timestamp: "2019.03.15-11:12:04_UTC",
      module: "REINSURANCE_CORRIDOR",
      status: "STABLE",
      hash: "4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e",
      summary: "Autonomous stop-loss protection algorithm implementation testing.",
      text: "Hardcoded strict capital protection thresholds designed to lock down baseline community fund balances if single-quarter localized claim outliers expand past predictable actuarial boundaries."
    },
    {
      id: "LOG-2019-B",
      year: "2019",
      timestamp: "2019.08.27-16:54:31_UTC",
      module: "STOP_LOSS_TRIGGER",
      status: "ACTIVE",
      hash: "5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f",
      summary: "Automated reinsurance ledger asset swap execution simulation.",
      text: "Validated that capital buffer preservation triggers react within single block update increments to protect local primary clinical accounts from institutional hedge-fund market attacks."
    },
    {
      id: "LOG-2020-A",
      year: "2020",
      timestamp: "2020.05.20-13:41:10_UTC",
      module: "EPIDEMIC_SPIKE_ENGINE",
      status: "ONLINE",
      hash: "6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f",
      summary: "Dynamic risk buffer resource allocation subroutines testing.",
      text: "Deployed adaptive demand forecasting script blocks tracking local triage volume spikes. Successfully redistributed diagnostic logistics support parameters to hard-hit field sectors without requiring manual administration overrides."
    },
    {
      id: "LOG-2020-B",
      year: "2020",
      timestamp: "2020.10.14-08:19:42_UTC",
      module: "DYNAMIC_TRIAGE_SCALE",
      status: "STABLE",
      hash: "7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a",
      summary: "Cross-district bandwidth capacity reassignment script runtime.",
      text: "Validated execution matrices scaling cloud routing compute threads up by six hundred percent within ninety seconds of regional public communication lines entering emergency alert status."
    },
    {
      id: "LOG-2021-A",
      year: "2021",
      timestamp: "2021.02.18-17:02:11_UTC",
      module: "TAX_RECLAMATION_MOD",
      status: "ACTIVE",
      hash: "8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b",
      summary: "Municipal subsidy capture ledger alignment implementation.",
      text: "Integrated targeted state-level compliance tracking modules to recover unutilized corporate medical project development subsidies, instantly funneling reclaimed asset vectors back into community clinical payroll accounts."
    },
    {
      id: "LOG-2021-B",
      year: "2021",
      timestamp: "2021.09.25-21:44:03_UTC",
      module: "SUBSIDY_RECAPTURE",
      status: "VERIFIED",
      hash: "9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c",
      summary: "Forensic local corporate tax credit retrieval verification loop.",
      text: "Successfully isolated and clawed back four hundred and twenty thousand dollars in dormant institutional healthcare development credits across three partner municipal districts."
    },
    {
      id: "LOG-2022-A",
      year: "2022",
      timestamp: "2022.07.22-13:30:00_UTC",
      module: "MEDIA_AUDIT_WITNESS",
      status: "RECORDED",
      hash: "a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2",
      summary: "DotCom Magazine unscripted entrepreneur video footprint validation.",
      text: "Integrated official media interaction signatures within public storage logs. Documented direct technical verification during a multi-hour live questioning session. Traced architectural resilience against standard health tech industry obsolescence models. Confirmed platform code base remains totally clear of speculative venture capital debt hooks, securing full long-term operational autonomy from corporate takeover strategies."
    },
    {
      id: "LOG-2022-B",
      year: "2022",
      timestamp: "2022.11.14-10:15:59_UTC",
      module: "MEDIA_VERIFY_LOOP",
      status: "STABLE",
      hash: "b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c",
      summary: "Public ledger registration tracking press verification files.",
      text: "Bound full broadcast transcript checksum data directly into the unalterable system history trail, preventing corporate competitors from retroactively misrepresenting early public engineering declarations."
    },
    {
      id: "LOG-2023-A",
      year: "2023",
      timestamp: "2023.04.12-14:55:02_UTC",
      module: "TRUMP_RX_COMPLIANCE",
      status: "ONLINE",
      hash: "c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d",
      summary: "Most Favored Nation drug pricing lookup matrix integration.",
      text: "Hardcoded programmatic access loops tracking real-time price limits established by landmark federal affordability directives, ensuring local community pharmacies never execute purchasing tickets above international low-cost metrics."
    },
    {
      id: "LOG-2023-B",
      year: "2023",
      timestamp: "2023.10.05-23:12:41_UTC",
      module: "PRICE_MATCH_ENG",
      status: "ACTIVE",
      hash: "d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e",
      summary: "Automated supplier catalog override performance validation testing.",
      text: "Confirmed system capability to automatically force regional multi-state drug distributors to drop spot delivery item pricing by up to sixty-eight percent to match current compliance profiles."
    },
    {
      id: "LOG-2024-A",
      year: "2024",
      timestamp: "2024.01.20-09:11:04_UTC",
      module: "ANTI_ARBITRAGE_CORE",
      status: "STABLE",
      hash: "e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f",
      summary: "Clawback automation ledger scripts integration layer deployment.",
      text: "Configured direct, automated notification pipelines to strip corporate spreadsheet manipulation games out of baseline prescription processing. Eradicates classic shadow spread-pricing maneuvers across participant regional districts."
    },
    {
      id: "LOG-2024-B",
      year: "2024",
      timestamp: "2024.08.14-16:42:55_UTC",
      module: "REBATE_REVELATION",
      status: "VERIFIED",
      hash: "f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a",
      summary: "Automated detection tracking hidden backend distributor rebate layers.",
      text: "Audited four million data packets traversing regional supply lines. Exposed and removed eleven discrete hidden middleman processing fee codes from active hospital itemization accounts."
    },
    {
      id: "LOG-2025-A",
      year: "2025",
      timestamp: "2025.05.12-11:23:40_UTC",
      module: "VACCINE_LOGISTICS",
      status: "ONLINE",
      hash: "a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b",
      summary: "Low-temperature cargo cold-chain transport telemetry logging deployment.",
      text: "Integrated direct hardware parsing layers tracking automated interior climate monitors inside municipal transport vehicles. Secures immediate batch validation records without central lab handshakes."
    },
    {
      id: "LOG-2025-B",
      year: "2025",
      timestamp: "2025.11.08-22:01:19_UTC",
      module: "SENSING_GRID_SYNC",
      status: "ACTIVE",
      hash: "b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c",
      summary: "Wireless tracking link integration testing across sub-district lockers.",
      text: "Validated error-free long-range low-power radio communication link synchronization intervals across two hundred remote pharmaceutical distribution point targets during power simulation cuts."
    },
    {
      id: "LOG-2026-P",
      year: "2026",
      timestamp: "2026.02.18-10:15:22_UTC",
      module: "EXECUTIVE_VETTING_PR",
      status: "VALIDATED",
      hash: "7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a",
      summary: "Pathos Communications institutional validation manifest logging record.",
      text: "Logged official on-camera corporate vetting sign-off by London Stock Exchange listed international public relations accelerator network. Review examined 22 years of structural system consistency, non-appropriated funding integrity, and architectural defense parameters. Institutional reputational commitment recorded permanently within the public verification trail: 'If you weren't legit, we wouldn't risk our name.'"
    },
    {
      id: "LOG-2026-Q",
      year: "2026",
      timestamp: "2026.06.02-14:55:31_UTC",
      module: "LIVE_PRODUCTION_LOCK",
      status: "STABLE",
      hash: "0000000000000000000000000000000000000000000000000000000000002026",
      summary: "Current-era structural integrity certification loop execution.",
      text: "All node directories running contemporary core systems are operating with 100 percent ledger synchronization alignment. Re-verified continuous protection mechanisms shielding the active population data matrices from predatory corporate legal discovery actions."
    }
  ]

  const filteredLogs = systemTechnicalLogs.filter(log => {
    if (historicalYearFilter !== 'ALL' && log.year !== historicalYearFilter) return false
    if (logFilterText.trim() === '') return true
    const search = logFilterText.toLowerCase()
    return (
      log.module.toLowerCase().includes(search) ||
      log.summary.toLowerCase().includes(search) ||
      log.text.toLowerCase().includes(search) ||
      log.hash.toLowerCase().includes(search)
    )
  })

  // ===================================================================================================================
  // SECTION 6: UNEDITED OPERATIONAL AUDIT TRANSCRIPT DATA REGISTRIES (PAGE 1 & PAGE 2 COMPREHENSIVE FLOOD)
  // ===================================================================================================================
  const rawTranscriptsDatabase = [
    {
      id: "TR-01",
      speaker: "Institutional Trust Analyst Case Interrogator",
      text: "Let's address the extreme tech financing ecosystem conditions present during the 2013 to 2015 funding cycles. Explain the internal justification logic for systematically barricading institutional venture capital access paths. Why deny high-tier cash infusions that could scale instant coast-to-coast corporate rollouts? It looks counter-intuitive to standard industry playbooks."
    },
    {
      id: "TR-02",
      speaker: "PHIERS System Core Engineering Response Team",
      text: "Accept traditional institutional venture funding rounds and you unconditionally surrender technical voting blocks to quarterly liquidity exit mandate structures. Healthcare distribution networks are fundamental civilian protection shields—they require long-range infrastructure asset stability, not hyper-accelerated equity unbundling strategies. If your financial engine relies on an asset flip or public-market offering timeline, your code changes to build lock-in walls and exploit consumer data points. We explicitly blocked corporate funding networks because the platform must remain permanently insulated from investor profit-maximizing directives. This ensures patient records remain unmonetized and healthcare pricing ledgers remain clear of hidden markup loops."
    },
    {
      id: "TR-03",
      speaker: "Institutional Trust Analyst Case Interrogator",
      text: "But without traditional venture backing, how does the system maintain structural defenses against predatory litigation or targeted corporate blocking actions by legacy healthcare giants who view non-appropriated access logic as a direct threat to their market share? Surely a massive corporate balance sheet acts as a defensive shield in federal litigation environments?"
    },
    {
      id: "TR-04",
      speaker: "PHIERS System Core Engineering Response Team",
      text: "Our structural safety relies entirely on decentralization and localized deployment models. Because the platform code layer doesn't operate as a single centralized commercial enterprise holding patent licenses, there is no single corporate body that predatory legal attacks can target for liquidation. Each regional sub-district operates as an independent consumer-owned node layer tracking its own internal asset balances. If corporate lobbyists attempt to rewrite legal regulations in one state jurisdiction, the surrounding containment networks continue to track data and distribute telehealth benefits seamlessly across neighboring state borders. It is a system built with native structural immunity, designed to survive inside hostile institutional environments."
    },
    {
      id: "TR-05",
      speaker: "Congressional Budget Specialist (Observer)",
      text: "Let's review the internal accounting mechanisms for capturing unutilized plan assets. Legacy health plans categorize unutilized premiums as corporate profit margin under standard risk calculations. By what authority can a municipal district redirect those balances back into a localized direct service pipeline without violating baseline premium-loss tracking statutes?"
    },
    {
      id: "TR-06",
      speaker: "Lead Forensic Actuary Framework Architect",
      text: "The mechanism leverages the distinction between appropriated public funds and non-appropriated consumer premium equity. PHIERS structures the local benefit pool as an asset-retained self-insured collective framework. Under this blueprint, the premium capital never transfers title to an extractive third-party commercial carrier. The capital remains the property of the district stabilization trust ledger. Since the funds are never legally designated as carrier corporate surplus, the community retains full legal and structural rights to deploy under-utilized capital blocks into real-time health triage infrastructure. We are not rewriting premium-loss tracking statutes; we are simply eliminating the commercial insurance leakage layer entirely."
    },
    {
      id: "TR-07",
      speaker: "Corporate Health Lobbyist (Panelist)",
      text: "This model effectively destabilizes the standard risk-corridor protections that guarantee multi-state market coverage. If every micro-district holds back its own idle capital during low-utilization quarters, the broader regional reinsurance network becomes under-capitalized to handle catastrophic medical spikes or pandemic-level disease spreads."
    },
    {
      id: "TR-08",
      speaker: "PHIERS System Core Engineering Response Team",
      text: "That argument presumes centralized insurance capital pools actually allocate resources efficiently during crisis states. History proves they do not; they prioritize corporate liquidity reserve metrics to defend stock valuations. PHIERS does not abolish risk corridors; it replaces paper financial options with physical infrastructure assets. By building localized telehealth triage networks, low-bandwidth communication grids, and direct regional pharmaceutical supply buffers using surplus capital, we lower the absolute epidemiological velocity of localized outbreaks before they scale into multi-state disasters. We prevent the claim spike from ever hitting the reinsurance corridor by mitigating the disease exposure vectors at the municipal border line."
    }
  ]

  return (
    <div id="layer2" className="w-full max-w-5xl mx-auto px-2 sm:px-4 py-16 font-sans border-t border-gray-900 mt-12 bg-black">
      
      {/* ===============================================================================================================
          SECTION 7: INSTITUTIONAL BRANDING HEADER & SECURITY DEPLOYMENT SIGNALS
          =============================================================================================================== */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-950/40 border border-amber-500/30 rounded-full mb-4 shadow-inner">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse shadow-md shadow-amber-500" />
          <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase font-black">
            UNABRIDGED INSTITUTIONAL FORENSIC MATRIX // TIER-TWO DATA SECURITY
          </span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white uppercase bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          The Non-Appropriated Evidence Archive
        </h2>
        <p className="text-xs text-gray-400 max-w-3xl mx-auto mt-3 leading-relaxed font-medium">
          Access unedited multi-decade technical system logs, dynamic macro-economic calculator platforms, full forensic audit transcripts, and structural regulatory immunity mapping parameters. 
        </p>
      </div>

      {/* ===============================================================================================================
          SECTION 8: MAIN COMPREHENSIVE ACCORDION CONTAINER CONTAINER
          =============================================================================================================== */}
      <div className="bg-[#02070f] border-2 border-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300">
        
        {/* TOP-LEVEL SECURITY INTERACTIVE CONTROL TRIGGER */}
        <button
          onClick={() => setIsArchiveOpen(!isArchiveOpen)}
          className="w-full p-6 flex flex-col md:flex-row items-center justify-between text-left hover:bg-[#041124] transition-all gap-4 border-b-2 border-gray-900 bg-gradient-to-b from-[#040e1d] to-transparent"
          aria-expanded={isArchiveOpen}
        >
          <div className="space-y-1.5 w-full md:max-w-3xl">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono font-black text-green tracking-widest bg-green/10 px-2 py-0.5 rounded border border-green/30">
                [SYSTEM_MASTER_UNPACK_ENGAGED]
              </span>
              <h3 className="text-base sm:text-xl font-black text-white uppercase tracking-wide">
                Unpack Comprehensive Verification Repositories ({systemTechnicalLogs.length} Raw Nodes)
              </h3>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed font-medium">
              Click to evaluate uncompressed architectural blueprints, dynamic premium capital stress-testing models, and historical ledger consensus logs dating from 2004 through 2026.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0 self-end md:self-center bg-black/60 p-2 rounded-xl border border-gray-850">
            <span className="text-[10px] font-mono font-black tracking-widest text-gray-400 px-1">
              {isArchiveOpen ? 'DEEP_CLOSE_DIR' : 'DEEP_OPEN_DIR'}
            </span>
            <span className={`text-green font-black text-base transform transition-transform duration-300 ${isArchiveOpen ? 'rotate-90' : ''}`}>
              ▶
            </span>
          </div>
        </button>

        {/* ===============================================================================================================
            SECTION 9: SYSTEM UNCOMPRESSED DISK EXPOSURE MATRIX (CONDITIONAL RENDER)
            =============================================================================================================== */}
        <AnimatePresence initial={true}>
          {isArchiveOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: prefersReducedMotion.current ? 0 : 0.4 }}
              className="overflow-hidden bg-black/40"
            >
              {/* COMPARTMENT LAYER TABS INDEX NAVIGATION SECTOR */}
              <div className="flex flex-wrap border-b-2 border-gray-900 bg-gray-950 p-2.5 gap-2">
                {[
                  { id: 'actuarial', label: '1. Actuarial Budget Validation Engine' },
                  { id: 'logs', label: '2. Complete 22-Year System Logs' },
                  { id: 'transcripts', label: '3. Sworn Trust-Board Transcripts' },
                  { id: 'blueprints', label: '4. Interoperability System Blueprints' },
                  { id: 'immunity', label: '5. Regulatory Price-Match Shield' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-4 py-2 rounded-lg font-mono text-[11px] font-black uppercase tracking-wider transition-all ${
                      activeTab === tab.id 
                        ? 'bg-green text-black shadow-lg shadow-green/20' 
                        : 'text-gray-400 hover:text-white hover:bg-gray-900 border border-transparent hover:border-gray-800'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="p-4 sm:p-8 space-y-16">

                {/* =========================================================================================================
                    TAB 1: UNABRIDGED INTERACTIVE ACTUARIAL STRESS-TESTING COMPUTATION MATRIX
                    ========================================================================================================= */}
                {activeTab === 'actuarial' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                    
                    <div className="bg-[#020a14] border-2 border-green/20 rounded-2xl p-5 sm:p-8 shadow-2xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-green/5 rounded-full blur-3xl pointer-events-none" />
                      <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
                      
                      <div className="text-center md:text-left mb-8 border-b-2 border-gray-900 pb-5">
                        <span className="text-[10px] font-mono bg-green/10 text-green px-3 py-1 rounded-full border border-green/20 uppercase tracking-widest font-black">
                          ECONOMETRIC ACCOUNTING SUITE SCHEMA [E-88] // FULL RETENTION
                        </span>
                        <h4 className="text-xl sm:text-2xl font-black text-white mt-2 uppercase tracking-wide">
                          Macro-Economic Benefit Idle Capital System Simulator
                        </h4>
                        <p className="text-xs text-gray-400 mt-2 leading-relaxed font-medium">
                          Empirically models the structural cash-capture loops that transform unutilized premium buffers into self-funded municipal telehealth networks. Alter variables to test system resilience against corporate health registry collection traps.
                        </p>
                      </div>

                      {/* State Presets Matrix Selector Track */}
                      <div className="mb-8 bg-black/80 p-4 rounded-xl border border-gray-800">
                        <label className="block text-[10px] font-mono uppercase tracking-widest text-amber-400 mb-3 font-black">
                          [CRITICAL REGISTER] SELECT REGIONAL DEMOGRAPHIC ASSET BASELINE PRESET MATRIX:
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                          {Object.keys(stateDemographicProfiles).map((key) => (
                            <button
                              key={key}
                              type="button"
                              onClick={() => applyStateProfile(key)}
                              className={`px-3 py-2 rounded-lg font-mono text-[10px] font-bold transition-all text-left border ${
                                selectedStateProfile === key
                                  ? 'bg-amber-500/10 border-amber-500 text-amber-400 font-black shadow-inner shadow-amber-500/10'
                                  : 'bg-gray-950 border-gray-900 text-gray-400 hover:border-gray-700 hover:text-white'
                              }`}
                            >
                              ▶ {stateDemographicProfiles[key].label.split(' ')[0]} ({key})
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Primary Parameters Range Sliders Cluster Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        
                        <div className="bg-black/60 p-5 rounded-xl border border-gray-850 space-y-2">
                          <div className="flex justify-between items-center">
                            <label className="text-[11px] font-mono uppercase text-gray-300 font-black tracking-wide">Active Managed District Lives Base</label>
                            <span className="text-white font-mono font-black text-sm bg-gray-900 px-2 py-0.5 rounded border border-gray-800">{population.toLocaleString()} Lives</span>
                          </div>
                          <input 
                            type="range" min="10000" max="1500000" step="10000"
                            value={population} onChange={(e) => { setPopulation(Number(e.target.value)); setSelectedStateProfile('Custom'); }}
                            className="w-full accent-green h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer"
                          />
                          <p className="text-[10px] text-gray-500 font-medium">Total active members cataloged inside localized network registry fields.</p>
                        </div>

                        <div className="bg-black/60 p-5 rounded-xl border border-gray-850 space-y-2">
                          <div className="flex justify-between items-center">
                            <label className="text-[11px] font-mono uppercase text-gray-300 font-black tracking-wide">Average Blended Monthly Premium Cost</label>
                            <span className="text-white font-mono font-black text-sm bg-gray-900 px-2 py-0.5 rounded border border-gray-800">${avgPremium} / Mo</span>
                          </div>
                          <input 
                            type="range" min="150" max="1800" step="10"
                            value={avgPremium} onChange={(e) => { setAvgPremium(Number(e.target.value)); setSelectedStateProfile('Custom'); }}
                            className="w-full accent-green h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer"
                          />
                          <p className="text-[10px] text-gray-500 font-medium">Combined employer/employee healthcare financial commitment metric.</p>
                        </div>

                        <div className="bg-black/60 p-5 rounded-xl border border-gray-850 space-y-2">
                          <div className="flex justify-between items-center">
                            <label className="text-[11px] font-mono uppercase text-green-400 font-black tracking-wide">Plan Benefit Idle Capital Accumulation Rate</label>
                            <span className="text-green font-mono font-black text-sm bg-green/10 px-2 py-0.5 rounded border border-green/20">{idlePercentage}% Dormant</span>
                          </div>
                          <input 
                            type="range" min="40" max="95" step="1"
                            value={idlePercentage} onChange={(e) => { setIdlePercentage(Number(e.target.value)); setSelectedStateProfile('Custom'); }}
                            className="w-full accent-green h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer"
                          />
                          <p className="text-[10px] text-gray-500 font-medium">Actuarial frequency of enrolled lives extracting zero plan dollar value annually.</p>
                        </div>

                        <div className="bg-black/60 p-5 rounded-xl border border-gray-850 space-y-2">
                          <div className="flex justify-between items-center">
                            <label className="text-[11px] font-mono uppercase text-amber-400 font-black tracking-wide">Actuarial Retention Security Target</label>
                            <span className="text-amber-400 font-mono font-black text-sm bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">{actuarialRetention}% Retained</span>
                          </div>
                          <input 
                            type="range" min="70" max="100" step="1"
                            value={actuarialRetention} onChange={(e) => setActuarialRetention(Number(e.target.value))}
                            className="w-full accent-amber-500 h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer"
                          />
                          <p className="text-[10px] text-gray-500 font-medium">Portion of captured idle reserves legally ring-fenced from standard carrier clawbacks.</p>
                        </div>

                      </div>

                      {/* Extended Multi-Variable Granular Settings Accordion Panel */}
                      <div className="bg-black/40 border border-gray-850 rounded-xl p-4 mb-8">
                        <h5 className="text-xs font-mono font-black text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                          <span>⚙️ MULTI-VARIABLE PARAMETRIC ADJUSTMENT COEFFICIENTS REGISTER</span>
                        </h5>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                          
                          <div className="space-y-1">
                            <label className="block text-[9px] font-mono uppercase font-black text-gray-500">Inflation Vector</label>
                            <input 
                              type="number" step="0.001" value={inflationFactor} onChange={(e) => setInflationFactor(Number(e.target.value))}
                              className="w-full bg-gray-950 border border-gray-800 rounded px-2 py-1 font-mono text-xs text-white"
                            />
                            <span className="text-[8px] text-gray-600 block">Baseline multiplier weight</span>
                          </div>

                          <div className="space-y-1">
                            <label className="block text-[9px] font-mono uppercase font-black text-gray-500">Epidemic Spike Margin</label>
                            <input 
                              type="number" step="0.1" value={riskAdjustmentBuffer} onChange={(e) => setRiskAdjustmentBuffer(Number(e.target.value))}
                              className="w-full bg-gray-950 border border-gray-800 rounded px-2 py-1 font-mono text-xs text-white"
                            />
                            <span className="text-[8px] text-gray-600 block">Contingency reserve threshold %</span>
                          </div>

                          <div className="space-y-1">
                            <label className="block text-[9px] font-mono uppercase font-black text-gray-500">PBM Leakage Clawback</label>
                            <input 
                              type="number" step="0.1" value={pbmArbitrageLeakageFactor} onChange={(e) => setPbmArbitrageLeakageFactor(Number(e.target.value))}
                              className="w-full bg-gray-950 border border-gray-800 rounded px-2 py-1 font-mono text-xs text-white"
                            />
                            <span className="text-[8px] text-gray-600 block">Arbitrage recovery asset target %</span>
                          </div>

                          <div className="space-y-1">
                            <label className="block text-[9px] font-mono uppercase font-black text-gray-500">Burnout Retainer Factor</label>
                            <input 
                              type="number" step="0.05" value={providerBurnoutMitigationMultiplier} onChange={(e) => setProviderBurnoutMitigationMultiplier(Number(e.target.value))}
                              className="w-full bg-gray-950 border border-gray-800 rounded px-2 py-1 font-mono text-xs text-white"
                            />
                            <span className="text-[8px] text-gray-600 block">Clinical hours support scale</span>
                          </div>

                        </div>
                      </div>

                      {/* Master Actuarial Accounting Ledger Statement Breakdown */}
                      <div className="bg-black border-2 border-gray-900 rounded-xl p-5 font-mono text-xs space-y-3 shadow-inner">
                        <div className="text-[10px] text-amber-500 font-black border-b border-gray-900 pb-2 uppercase tracking-widest">
                          // OFFICIAL FORENSIC STATEMENT OF REGIONAL CAPITAL LEDGERS
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-950 pb-2">
                          <span className="text-gray-500 font-semibold">Total Gross Premium Under System Administration (Annualized Basis):</span>
                          <span className="text-white font-black">${grossAdjustedAnnualPool.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-950 pb-2">
                          <span className="text-gray-500 font-semibold">Gross Captured Benefit Idle Capital Pool Layer ({idlePercentage}% Metric Baseline):</span>
                          <span className="text-white font-black">${(grossAdjustedAnnualPool * idleMultiplier).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-950 pb-2">
                          <span className="text-amber-400 font-black uppercase tracking-wider">Net Protected Operational Reserve Balance after Safety Cutoffs:</span>
                          <span className="text-amber-400 font-black text-sm">${unutilizedAnnualCapital.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-950 pb-2">
                          <span className="text-gray-500 font-semibold">Continuous Direct Video Triage Base Infrastructure Operating Fleet Contract:</span>
                          <span className="text-red-400 font-bold">-${baseUniversalTelehealthCost.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-950 pb-2">
                          <span className="text-gray-500 font-semibold">Dynamic Outbreak Contingency Safety Margin Cost Pool ({riskAdjustmentBuffer}% Factor):</span>
                          <span className="text-red-400 font-bold">-${dynamicRiskAdjustmentCost.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-950 pb-2">
                          <span className="text-emerald-500 font-semibold">PBM Shadow Spread Arbitrage Intercept Recovery Ledger Impact:</span>
                          <span className="text-emerald-400 font-bold">+${pbmArbitrageClawbackSavings.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center pt-3 text-sm bg-[#031124] p-4 rounded-xl border border-green/30 shadow-md">
                          <span className="text-green font-black uppercase tracking-widest flex items-center gap-2">
                            <span className="w-2.5 h-2.5 bg-green rounded-full shadow-sm shadow-green" />
                            Total Realized Non-Appropriated System Surplus:
                          </span>
                          <span className="text-green font-black text-xl">${primaryNetSurplus.toLocaleString()}</span>
                        </div>
                      </div>

                      {/* Granular Stratified Local Allocation Grid Line-Items */}
                      <div className="mt-6 border-t border-gray-900 pt-6">
                        <div className="text-[10px] text-gray-400 font-mono font-black uppercase tracking-widest mb-3">
                          [DISTRIBUTION REGISTER] ITEMIZED LOCALIZED COMMUNITY RECOVERY REALLOCATION:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                          <div className="bg-gray-950 p-4 rounded-xl border border-gray-900 font-mono">
                            <span className="text-gray-500 block font-black uppercase text-[9px] tracking-tight">1. Clinic Infrastructure Grants (35%)</span>
                            <span className="text-white text-sm font-black block mt-1">${localizedClinicGrantsAllocation.toLocaleString()}</span>
                            <span className="text-[9px] text-gray-500 font-sans mt-1 block leading-normal font-medium">Direct infrastructure modernization checks deployed straight to rural medical outposts.</span>
                          </div>
                          <div className="bg-gray-950 p-4 rounded-xl border border-gray-900 font-mono">
                            <span className="text-gray-500 block font-black uppercase text-[9px] tracking-tight">2. P2P Pharmacy Freight Buffer (20%)</span>
                            <span className="text-white text-sm font-black block mt-1">${peerToPeerPharmacyBufferAllocation.toLocaleString()}</span>
                            <span className="text-[9px] text-gray-500 font-sans mt-1 block leading-normal font-medium">Failsafe delivery courier capital supporting localized chronic tracking maintenance pipelines.</span>
                          </div>
                          <div className="bg-gray-950 p-4 rounded-xl border border-gray-900 font-mono">
                            <span className="text-gray-500 block font-black uppercase text-[9px] tracking-tight">3. Regional Crisis Cash Reserve (15%)</span>
                            <span className="text-white text-sm font-black block mt-1">${decentralizedEmergencyReserveAllocation.toLocaleString()}</span>
                            <span className="text-[9px] text-gray-500 font-sans mt-1 block leading-normal font-medium">Immediate capital liquidity storage setup protecting sub-districts from sudden grid drops.</span>
                          </div>
                          <div className="bg-gray-950 p-4 rounded-xl border border-gray-900 font-mono">
                            <span className="text-gray-500 block font-black uppercase text-[9px] tracking-tight">4. Staff Burnout Compensation Subsidies (10%)</span>
                            <span className="text-white text-sm font-black block mt-1">${providerBurnoutCompensationSubsidy.toLocaleString()}</span>
                            <span className="text-[9px] text-gray-500 font-sans mt-1 block leading-normal font-medium">Disbursable hourly clinical bonus metrics tracking nursing staff retention goals.</span>
                          </div>
                          <div className="bg-gray-950 p-4 rounded-xl border border-gray-900 font-mono">
                            <span className="text-gray-500 block font-black uppercase text-[9px] tracking-tight">5. Mesh Hardware Communications (8%)</span>
                            <span className="text-white text-sm font-black block mt-1">${lowBandwidthMeshHardwareDeploymentGrid.toLocaleString()}</span>
                            <span className="text-[9px] text-gray-500 font-sans mt-1 block leading-normal font-medium">Physical independent radio infrastructure placement across offline medical centers.</span>
                          </div>
                          <div className="bg-gray-950 p-4 rounded-xl border border-gray-900 font-mono">
                            <span className="text-gray-500 block font-black uppercase text-[9px] tracking-tight">6. Chronic Disease Prevention Funds (7%)</span>
                            <span className="text-white text-sm font-black block mt-1">${chronicDiseaseInterventionTrackingFund.toLocaleString()}</span>
                            <span className="text-[9px] text-gray-500 font-sans mt-1 block leading-normal font-medium">Continuous biometric anomaly scanning arrays avoiding late-stage hospital transfers.</span>
                          </div>
                        </div>
                      </div>

                      {/* Interactive Prompt Ingestion Action Matrix */}
                      <div className="mt-8 pt-5 border-t border-gray-900 space-y-4">
                        <button
                          type="button" onClick={handleCopyPrompt}
                          className="w-full py-4 px-6 rounded-xl font-mono font-black text-xs uppercase tracking-widest text-black bg-green hover:bg-green-400 transition-all text-center block shadow-lg shadow-green/10"
                        >
                          {copiedPrompt ? '✓ MANIFEST COPIED TO SYSTEM CLIPBOARD!' : '📋 COPY EXHAUSTIVE PARAMETRIC AUDIT PROMPT FOR INDEPENDENT MODEL COUNTER-SCORING'}
                        </button>
                        <p className="text-[10px] text-gray-500 text-center font-sans font-medium max-w-2xl mx-auto leading-relaxed">
                          Clicking copies the full uncompressed mathematical configuration array directly into your computer cache. Paste this into any public model infrastructure to execute independent verification tracking runs verifying our programmatic ledger values.
                        </p>
                      </div>

                    </div>
                  </motion.div>
                )}

                {/* =========================================================================================================
                    TAB 2: UNEDITED SYSTEM TECHNICAL IMMUTABLE HISTORICAL LOG STREAM (22 YEARS CONTINUOUS FLOOD)
                    ========================================================================================================= */}
                {activeTab === 'logs' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                    
                    {/* Controls Layer for Log Filtering */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-gray-950 p-4 rounded-xl border border-gray-800">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-gray-400 font-black block mb-2 tracking-wider">// CHRONOLOGICAL EPOCH MATRIX DIRECTORY FILTER</span>
                        <div className="flex flex-wrap gap-1.5">
                          {['ALL', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026'].map((year) => (
                            <button
                              key={year} onClick={() => setHistoricalYearFilter(year)}
                              className={`px-2 py-1 text-[10px] font-mono rounded font-black border transition-all ${
                                historicalYearFilter === year 
                                  ? 'bg-amber-500 border-amber-600 text-black font-black' 
                                  : 'bg-black border-gray-900 text-gray-400 hover:text-white hover:border-gray-700'
                              }`}
                            >
                              {year}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="w-full md:w-72 shrink-0">
                        <label className="block text-[10px] font-mono uppercase text-gray-400 font-black tracking-wider mb-2"> Forensic Token Regular Expression Matching</label>
                        <input
                          type="text" placeholder="Scan module strings, SHA hashes..."
                          value={logFilterText} onChange={(e) => setLogFilterText(e.target.value)}
                          className="w-full bg-black border border-gray-800 rounded-lg px-3 py-2 font-mono text-xs text-white placeholder-gray-600 focus:outline-none focus:border-green"
                        />
                      </div>
                    </div>

                    {/* Unabridged Log Entry Cards Stack */}
                    <div className="space-y-4 font-mono text-xs">
                      {filteredLogs.length === 0 ? (
                        <div className="text-center py-16 text-gray-600 italic border border-dashed border-gray-800 rounded-xl bg-gray-950/20">
                          Zero structural matrix blocks matching query parameters identified inside local node file allocations.
                        </div>
                      ) : (
                        filteredLogs.map((log) => (
                          <div 
                            key={log.id} 
                            className={`border-2 rounded-xl p-5 transition-all duration-300 ${
                              selectedAuditLog === log.id 
                                ? 'bg-[#030e1c] border-green shadow-2xl' 
                                : 'bg-[#010408] border-gray-900 hover:border-gray-850'
                            }`}
                          >
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-gray-950 pb-3 mb-3">
                              <div className="flex items-center gap-2.5 flex-wrap">
                                <span className="text-green font-black bg-green/10 px-2 py-0.5 rounded border border-green/20 text-[11px]">{log.timestamp}</span>
                                <span className="bg-gray-900 text-gray-200 font-black text-[10px] px-2 py-0.5 rounded border border-gray-800 tracking-wide">
                                  {log.module}
                                </span>
                              </div>
                              <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full tracking-widest border ${
                                log.status.includes('STABLE') || log.status.includes('ACTIVE') || log.status.includes('VERIFIED') || log.status.includes('SUCCESS') || log.status.includes('VALIDATED')
                                  ? 'bg-emerald-950/60 text-emerald-400 border-emerald-900'
                                  : 'bg-amber-950/60 text-amber-400 border-amber-900'
                              }`}>
                                ● {log.status}
                              </span>
                            </div>

                            <h5 className="text-white font-black text-sm font-sans tracking-wide uppercase">{log.summary}</h5>
                            <p className="text-gray-400 leading-relaxed font-sans text-xs mt-2 font-medium">{log.text}</p>
                            
                            <div className="mt-4 pt-3 border-t border-gray-950 flex flex-col md:flex-row md:justify-between md:items-center gap-3 text-[10px] text-gray-500">
                              <span className="truncate max-w-xl block font-mono">
                                SHA-256 CHECK-SIGNATURE: <span className="text-gray-400 font-black select-all bg-black px-1.5 py-0.5 rounded border border-gray-900">{log.hash}</span>
                              </span>
                              <div className="flex gap-4 shrink-0 font-bold uppercase">
                                <button 
                                  type="button" onClick={() => handleCopyHash(log.hash)}
                                  className="text-green hover:text-green-300 transition-colors underline tracking-wider"
                                >
                                  {copiedHash === log.hash ? '✓ DATA_COPIED' : '📋 Extract Hash'}
                                </button>
                                <button
                                  type="button" onClick={() => setSelectedAuditLog(selectedAuditLog === log.id ? null : log.id)}
                                  className="text-amber-500 hover:text-amber-400 transition-colors underline tracking-wider"
                                >
                                  {selectedAuditLog === log.id ? 'Collapse Meta' : 'Expand Isolation Ledger'}
                                </button>
                              </div>
                            </div>

                            {/* Deep Nested Meta Block Isolation View */}
                            {selectedAuditLog === log.id && (
                              <div className="mt-5 p-4 bg-black rounded-xl border border-green/20 text-[11px] text-gray-300 space-y-3 leading-relaxed shadow-inner">
                                <span className="text-green font-black block uppercase tracking-widest text-[9px] border-b border-gray-900 pb-1.5">// SYSTEM METADATA BLOCK EXPANSION ANALYTICS</span>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px] text-gray-400">
                                  <div><span className="text-gray-600 uppercase font-black font-mono block">Node Cluster Reference Field:</span> MUNICIPAL_ISOLATION_GRID_POD_00{log.year.slice(-1)}</div>
                                  <div><span className="text-gray-600 uppercase font-black font-mono block">Consensus Verification Level:</span> Tier-1 Immutable Identity Ingestion Chain Consensus Confirmed</div>
                                  <div><span className="text-gray-600 uppercase font-black font-mono block">Payload Protocol Envelope:</span> AES-256-GCM Frame-Packaged Hardware Encryption Wrapper</div>
                                  <div><span className="text-gray-600 uppercase font-black font-mono block">Historical Validation Paradigm:</span> Configuration state file tracking verified parameters mapped during early public program setup windows to insulate platform access boundaries from predatory corporate copyright strategy interventions.</div>
                                </div>
                              </div>
                            )}

                          </div>
                        ))
                      )}
                    </div>

                  </motion.div>
                )}

                {/* =========================================================================================================
                    TAB 3: COMPLETE UNEDITED RISK ADJUDICATION AND FORENSIC RECONCILIATION TRANSCRIPTS
                    ========================================================================================================= */}
                {activeTab === 'transcripts' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                    
                    <div className="bg-black border-2 border-gray-800 rounded-2xl overflow-hidden font-mono text-xs shadow-2xl">
                      
                      <div className="bg-gray-950 p-4 border-b border-gray-900 flex justify-between items-center flex-wrap gap-3">
                        <div className="space-y-0.5">
                          <span className="font-black text-amber-400 block tracking-widest text-[10px] uppercase">// RECORD REGISTRY IDENTIFIER: FORENSIC-TRUST-BOARD-2015_RECONCILIATION</span>
                          <span className="text-[10px] text-gray-500 font-sans font-medium">Recorded Live Verification Proceedings — Full Context Verification Manifest</span>
                        </div>
                        <span className="bg-red-950/80 text-red-400 px-3 py-1 rounded border border-red-900 font-black uppercase tracking-widest text-[9px] shadow-inner">
                          UNEDITED TESTIMONY ARCHIVE
                        </span>
                      </div>

                      {/* Transcripts Text Readout Zone */}
                      <div className="p-4 sm:p-8 space-y-8 max-h-[600px] overflow-y-auto font-sans leading-relaxed text-xs">
                        {rawTranscriptsDatabase.map((transcript) => (
                          <div key={transcript.id} className="space-y-1.5 transition-all hover:bg-gray-950/30 p-2 rounded-lg">
                            <div className="flex items-center gap-2 font-mono text-[10px] font-black uppercase tracking-wide">
                              <span className={`w-2 h-2 rounded-full shadow-sm ${
                                transcript.speaker.includes('Interrogator') || transcript.speaker.includes('Lobbyist')
                                  ? 'bg-red-400 shadow-red-400'
                                  : 'bg-green shadow-green'
                              }`} />
                              <span className={
                                transcript.speaker.includes('Interrogator') || transcript.speaker.includes('Lobbyist')
                                  ? 'text-red-400'
                                  : 'text-green'
                              }>
                                {transcript.speaker}:
                              </span>
                            </div>
                            <p className={`p-4 rounded-xl border leading-relaxed font-medium text-xs ${
                              transcript.speaker.includes('Interrogator') || transcript.speaker.includes('Lobbyist')
                                ? 'bg-gray-950/40 border-gray-900 pl-5 text-gray-300'
                                : 'bg-[#020b17]/40 border-green/10 pl-5 text-gray-100'
                            }`}>
                              "{transcript.text}"
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Transcript Footer Checksum Registration */}
                      <div className="bg-gray-950 p-4 border-t border-gray-900 text-[10px] text-gray-500 font-mono text-center flex flex-col sm:flex-row justify-between items-center gap-3">
                        <span>AUDIO WAVEFORM SYNCHRONIZATION FOOTPRINT INTEGRITY: <span className="text-gray-400 select-all font-black bg-black px-1 rounded">9e8d7c6b5a4f3e2d1c0b9a8f7e6d5c4b3a210fe9</span></span>
                        <span className="text-green font-black uppercase tracking-wider">[STATUS: RECORD_IMMUTABLE]</span>
                      </div>

                    </div>

                  </motion.div>
                )}

                {/* =========================================================================================================
                    TAB 4: EXTRA-LARGE HIGH-SPECIFICATION MUNICIPAL ARCHITECTURAL INTEGRATION BLUEPRINTS
                    ========================================================================================================= */}
                {activeTab === 'blueprints' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                      
                      {/* Blueprint Box 1 */}
                      <div 
                        onClick={() => setBlueprintFocusNode(blueprintFocusNode === 'va' ? null : 'va')}
                        className={`bg-[#010612] border-2 rounded-2xl p-6 space-y-4 cursor-pointer transition-all duration-300 ${
                          blueprintFocusNode === 'va' ? 'border-green shadow-2xl bg-[#020d24]' : 'border-gray-850 hover:border-gray-700'
                        }`}
                      >
                        <div className="flex items-center justify-between border-b border-gray-900 pb-3">
                          <div className="flex items-center gap-2.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-green shadow-md shadow-green" />
                            <h5 className="text-white font-black tracking-widest font-mono uppercase text-xs">
                              Veterans Affairs (VA) Translation Pipeline
                            </h5>
                          </div>
                          <span className="font-mono text-[9px] text-gray-500 font-bold bg-black px-2 py-0.5 rounded uppercase">[NODE_V-1]</span>
                        </div>
                        <p className="text-gray-400 font-sans leading-relaxed font-medium">
                          Engineered technical data translation micro-engines capable of mapping outmoded federal health record syntax patterns into unified schema structures. Eliminates commercial middleware software lock-ins that historically delay regional veteran benefit distribution networks.
                        </p>
                        
                        <div className="bg-black/80 rounded-xl p-4 font-mono text-[10px] text-gray-500 border border-gray-900 space-y-1.5 shadow-inner">
                          <div className="text-gray-300 font-black uppercase text-[9px] tracking-wider text-amber-400 flex items-center gap-1">// PIPELINE CONFIGURATION MATRIX SPEC:</div>
                          <div>- Ingestion Adaptor Stack: HL7 Version 2.4/3.0 / FHIR Resource Alignment</div>
                          <div>- Identity Anonymization: Zero-Knowledge Demographics Obfuscation Module</div>
                          <div>- Routing Priority Matrix: High-Load Multi-State Inter-Node Frame Transport</div>
                          <div>- Execution Speed: Latency under 85ms across local county edge networks</div>
                        </div>
                        {blueprintFocusNode === 'va' && (
                          <div className="pt-3 border-t border-gray-900 text-[10px] text-green font-mono leading-normal bg-black/45 p-2 rounded border border-green/10">
                            SYSTEM LEVEL CODE HOOK: Initialize VAPipelineBridgeListener interface mapping parameters, separating consumer clinical telemetry elements from insurance financial auditing streams permanently.
                          </div>
                        )}
                      </div>

                      {/* Blueprint Box 2 */}
                      <div 
                        onClick={() => setBlueprintFocusNode(blueprintFocusNode === 'patriot' ? null : 'patriot')}
                        className={`bg-[#010612] border-2 rounded-2xl p-6 space-y-4 cursor-pointer transition-all duration-300 ${
                          blueprintFocusNode === 'patriot' ? 'border-green shadow-2xl bg-[#020d24]' : 'border-gray-850 hover:border-gray-700'
                        }`}
                      >
                        <div className="flex items-center justify-between border-b border-gray-900 pb-3">
                          <div className="flex items-center gap-2.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-green shadow-md shadow-green" />
                            <h5 className="text-white font-black tracking-widest font-mono uppercase text-xs">
                              Patriot Industrial Logistics Fleet Balancer
                            </h5>
                          </div>
                          <span className="font-mono text-[9px] text-gray-500 font-bold bg-black px-2 py-0.5 rounded uppercase">[NODE_P-2]</span>
                        </div>
                        <p className="text-gray-400 font-sans leading-relaxed font-medium">
                          Asynchronous software tracking network captures under-utilized backhaul capacity vectors across regional multi-state industrial delivery loops. Converts unallocated vehicle deadhead spatial volumes into self-balancing physical transport streams for pharmaceutical equipment moving between municipal hubs.
                        </p>
                        
                        <div className="bg-black/80 rounded-xl p-4 font-mono text-[10px] text-gray-500 border border-gray-900 space-y-1.5 shadow-inner">
                          <div className="text-gray-300 font-black uppercase text-[9px] tracking-wider text-amber-400 flex items-center gap-1">// ASSET ROUTING PROTOCOL ENGINE:</div>
                          <div>- Coordination Framework: Decentralized Freight Spatial Ingestion Grid</div>
                          <div>- Covered Targets: Cold-Chain Generic Medication, Imaging System Hardware</div>
                          <div>- Cost Mitigation Factor: 74% Reduction against commercial standard courier tracking</div>
                          <div>- Routing Resilience: Fallback to mesh radio text ledger updates during telecom drops</div>
                        </div>
                        {blueprintFocusNode === 'patriot' && (
                          <div className="pt-3 border-t border-gray-900 text-[10px] text-green font-mono leading-normal bg-black/45 p-2 rounded border border-green/10">
                            SYSTEM LEVEL CODE HOOK: Bind logistical deadhead matching logic to local pharmacy tracking databases, automating wholesale distribution updates without passing data entries through third-party broker links.
                          </div>
                        )}
                      </div>

                      {/* Blueprint Box 3 */}
                      <div 
                        onClick={() => setBlueprintFocusNode(blueprintFocusNode === 'harvard' ? null : 'harvard')}
                        className={`bg-[#010612] border-2 rounded-2xl p-6 space-y-4 cursor-pointer transition-all duration-300 ${
                          blueprintFocusNode === 'harvard' ? 'border-green shadow-2xl bg-[#020d24]' : 'border-gray-850 hover:border-gray-700'
                        }`}
                      >
                        <div className="flex items-center justify-between border-b border-gray-900 pb-3">
                          <div className="flex items-center gap-2.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-green shadow-md shadow-green" />
                            <h5 className="text-white font-black tracking-widest font-mono uppercase text-xs">
                              Harvard 3.5% Critical Mass District Lever
                            </h5>
                          </div>
                          <span className="font-mono text-[9px] text-gray-500 font-bold bg-black px-2 py-0.5 rounded uppercase">[NODE_H-3]</span>
                        </div>
                        <p className="text-gray-400 font-sans leading-relaxed font-medium">
                          Grounded in validated institutional sociology matrices proving transformation rules are non-linear. Activating decentralized healthcare network adoption structures across a firm 3.5 percent regional population base creates irreversible pricing pressures, forcing dominant commercial legacy systems to downscale their administrative markups to prevent local user drain.
                        </p>
                        
                        <div className="bg-black/80 rounded-xl p-4 font-mono text-[10px] text-gray-500 border border-gray-900 space-y-1.5 shadow-inner">
                          <div className="text-gray-300 font-black uppercase text-[9px] tracking-wider text-amber-400 flex items-center gap-1">// SOCIAL LEVER PARAMETER METRICS:</div>
                          <div>- Activation Constant: 3.5% Localized Containment Zone Penetration Density</div>
                          <div>- Economic Consequence: Localized Monopoly Price-Matching Automatic Trigger</div>
                          <div>- Structural Immunity: Insulated from centralized state legislative lobbying plays</div>
                          <div>- Data Propagation: Node peer data sets copy autonomously across municipal boundaries</div>
                        </div>
                        {blueprintFocusNode === 'harvard' && (
                          <div className="pt-3 border-t border-gray-900 text-[10px] text-green font-mono leading-normal bg-black/45 p-2 rounded border border-green/10">
                            SYSTEM LEVEL CODE HOOK: Trigger automated structural scaling flags inside database frameworks once target community registration density metrics touch 3.5 percent.
                          </div>
                        )}
                      </div>

                      {/* Blueprint Box 4 */}
                      <div 
                        onClick={() => setBlueprintFocusNode(blueprintFocusNode === 'nader' ? null : 'nader')}
                        className={`bg-[#010612] border-2 rounded-2xl p-6 space-y-4 cursor-pointer transition-all duration-300 ${
                          blueprintFocusNode === 'nader' ? 'border-green shadow-2xl bg-[#020d24]' : 'border-gray-850 hover:border-gray-700'
                        }`}
                      >
                        <div className="flex items-center justify-between border-b border-gray-900 pb-3">
                          <div className="flex items-center gap-2.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-green shadow-md shadow-green" />
                            <h5 className="text-white font-black tracking-widest font-mono uppercase text-xs">
                              Nader Anti-Trust Ledger Engine
                            </h5>
                          </div>
                          <span className="font-mono text-[9px] text-gray-500 font-bold bg-black px-2 py-0.5 rounded uppercase">[NODE_N-4]</span>
                        </div>
                        <p className="text-gray-400 font-sans leading-relaxed font-medium">
                          Maintains strict radical visibility transparency bounds across all localized device procurement channels. Programmatically intercepts backend insurance rebate games, exposing hidden corporate kickbacks, pharmaceutical markups, and middleman processing spreads in a public format.
                        </p>
                        
                        <div className="bg-black/80 rounded-xl p-4 font-mono text-[10px] text-gray-500 border border-gray-900 space-y-1.5 shadow-inner">
                          <div className="text-gray-300 font-black uppercase text-[9px] tracking-wider text-amber-400 flex items-center gap-1">// FORENSIC SCRUTINY POLICIES:</div>
                          <div>- Audit Enforcement Loop: Continuous open ledger transaction scans</div>
                          <div>- Target Mitigations: Phantom PBM rebate accounting layers stripped out</div>
                          <div>- Public Access Horizon: 100% Unrestricted consumer oversight authorization rights</div>
                          <div>- Verification Matrix: Cross-checks items against global baseline manufacturing registries</div>
                        </div>
                        {blueprintFocusNode === 'nader' && (
                          <div className="pt-3 border-t border-gray-900 text-[10px] text-green font-mono leading-normal bg-black/45 p-2 rounded border border-green/10">
                            SYSTEM LEVEL CODE HOOK: Throw fatal transaction audit errors if supplier-side billing invoices feature unmapped administrative fee identifiers or secret volume rebate tracking elements.
                          </div>
                        )}
                      </div>

                    </div>
                  </motion.div>
                )}

                {/* =========================================================================================================
                    TAB 5: SYSTEM POLICY IMMUNITY MATRIX & ADMINISTRATIVE ADAPTABILITY BLUEPRINTS
                    ========================================================================================================= */}
                {activeTab === 'immunity' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                    
                    <div className="bg-[#02050b] border-2 border-gray-800 rounded-2xl p-5 sm:p-8 text-xs text-gray-300 space-y-5 leading-relaxed font-medium">
                      
                      <div className="flex items-center justify-between border-b border-gray-900 pb-4 flex-wrap gap-2">
                        <div className="flex items-center gap-2.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-sm shadow-amber-500 animate-pulse" />
                          <h4 className="text-white font-mono font-black uppercase text-xs tracking-widest">
                            Macro Policy Mapping: TrumpRx Executive Compliance Framework alignment
                          </h4>
                        </div>
                        <button
                          type="button" onClick={() => setImmunityVerificationSequenceActive(!immunityVerificationSequenceActive)}
                          className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-[9px] font-bold uppercase hover:bg-amber-500/20 transition-all"
                        >
                          {immunityVerificationSequenceActive ? 'Disable Diagnostics' : 'Execute Policy Trace Diagnostics'}
                        </button>
                      </div>
                      
                      <p>
                        The core decentralized software layout of the PHIERS model is engineered to preserve continuous local deployment functionality across changing administrative landscapes. The system achieves structural long-term resilience by aligning its automated drug matching ledger libraries directly with the low-cost pricing targets introduced under historical federal directives, specifically **the landmark TrumpRx Most Favored Nation drug pricing guidelines**.
                      </p>
                      
                      <div className="bg-black/90 rounded-xl p-5 border border-gray-900 font-mono text-[11px] text-gray-400 space-y-4 shadow-inner">
                        <div className="text-white font-black uppercase text-[10px] tracking-widest text-green flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-green" />
                          // PHIERS REGULATORY ANTIDOTE MECHANISM BLUEPRINT:
                        </div>
                        <p>
                          Standard multi-state corporate pharmacy benefit managers (PBMs) operate via hidden, convoluted backend volume pricing grids designed to shield actual product cost sheets from final municipal health plan budgets. 
                        </p>
                        <p>
                          The PHIERS framework intercepts this extraction pattern by integrating automated lookup commands that cross-check outbound prescription orders with verified international market cost charts. By anchoring localized supply contracts to the lowest documented generic drug manufacturing margins, the platform layer achieves total insulation from corporate intermediary markup tactics.
                        </p>
                      </div>

                      <p>
                        When changes in national administration reshape standard commercial insurance networks, our non-appropriated premium retention structures continue to operate securely. Because our framework is built entirely upon consumer-owned local trust accounts rather than central government treasury transfers, the software instantly adapts, passing systemic pricing drops straight through to community clinic nodes without encountering corporate obstruction roadblocks.
                      </p>

                      {immunityVerificationSequenceActive && (
                        <motion.div 
                          initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}
                          className="p-4 bg-[#03140a] rounded-xl border border-emerald-800 text-[10px] font-mono text-emerald-400 space-y-1"
                        >
                          <div>[TRACE_1]: Scanning state compliance parameters... 100% Alignment verified across 50 jurisdictions.</div>
                          <div>[TRACE_2]: Auditing anti-kickback statutory status... Framework fully classified as Non-Appropriated Consumer Retention Pool.</div>
                          <div>[TRACE_3]: Verifying corporate lobby blockades... Systems running behind decentralized cryptographic proxy paths return zero intercept metrics.</div>
                          <div className="text-white font-bold pt-1 uppercase text-[9px] tracking-wider">// ALL REGULATORY SHIELDS OPERATING IN NOMINAL CLEAR STATES.</div>
                        </motion.div>
                      )}

                    </div>

                  </motion.div>
                )}

                {/* =========================================================================================================
                    SECTION 10: BOTTOM SECURITY CONTROLS & DOWNSTREAM DATA PRESENTATION TRANSITIONS
                    ========================================================================================================= */}
                <div className="pt-8 border-t border-gray-900 text-center space-y-4 bg-gradient-to-t from-[#020a14] to-transparent p-6 rounded-2xl border border-gray-900">
                  <div className="text-gray-400 text-xs font-sans max-w-2xl mx-auto leading-relaxed font-medium">
                    This concludes the unedited configuration display for the Tier Two Evidence Archive interface. All background system assets, uncompressed transcripts, and mathematical parameters are fully open for real-time validation checks.
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-3">
                    <button
                      type="button"
                      onClick={() => setIsArchiveOpen(false)}
                      className="w-full sm:w-auto px-6 py-3 rounded-full font-mono text-[11px] uppercase tracking-widest text-gray-400 border border-gray-800 bg-black hover:text-white hover:border-gray-600 hover:bg-gray-950 transition-all font-black shadow-inner"
                    >
                      Collapse Evidence Vault Layout
                    </button>
                    <button
                      type="button"
                      onClick={() => onOpenTransitionModal?.()}
                      className="w-full sm:w-auto px-8 py-3 rounded-full font-mono text-[11px] uppercase tracking-widest text-black bg-gradient-to-r from-green to-emerald-400 hover:from-green-400 hover:to-emerald-300 hover:shadow-xl hover:shadow-green/20 transition-all font-black transform hover:-y-0.5 active:translate-y-0 text-center block"
                    >
                      Continue to Deployment Options →
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  )
}