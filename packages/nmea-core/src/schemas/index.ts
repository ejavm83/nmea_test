import { registerSchema } from "../registry";
import { GGA_SCHEMA } from "./GGA";
import { GSA_SCHEMA } from "./GSA";
import { RMC_SCHEMA } from "./RMC";
import { AAM_SCHEMA } from "./AAM";
import { ABK_SCHEMA } from "./ABK";
import { ABM_SCHEMA } from "./ABM";
import { ACA_SCHEMA } from "./ACA";
import { ACF_SCHEMA } from "./ACF";
import { ACG_SCHEMA } from "./ACG";
import { ACK_SCHEMA } from "./ACK";
import { ACM_SCHEMA } from "./ACM";
import { ACS_SCHEMA } from "./ACS";
import { ADS_SCHEMA } from "./ADS";
import { AFB_SCHEMA } from "./AFB";
import { AGA_SCHEMA } from "./AGA";
import { AID_SCHEMA } from "./AID";
import { AIR_SCHEMA } from "./AIR";
import { AKD_SCHEMA } from "./AKD";
import { ALA_SCHEMA } from "./ALA";
import { ALM_SCHEMA } from "./ALM";
import { ALR_SCHEMA } from "./ALR";
import { APB_SCHEMA } from "./APB";
import { ASN_SCHEMA } from "./ASN";
import { BBM_SCHEMA } from "./BBM";
import { BCG_SCHEMA } from "./BCG";
import { BCL_SCHEMA } from "./BCL";
import { BEC_SCHEMA } from "./BEC";
import { BOD_SCHEMA } from "./BOD";
import { BWC_SCHEMA } from "./BWC";
import { BWR_SCHEMA } from "./BWR";
import { BWW_SCHEMA } from "./BWW";
import { CBR_SCHEMA } from "./CBR";
import { CEK_SCHEMA } from "./CEK";
import { COP_SCHEMA } from "./COP";
import { CPC_SCHEMA } from "./CPC";
import { CPD_SCHEMA } from "./CPD";
import { CPG_SCHEMA } from "./CPG";
import { CPN_SCHEMA } from "./CPN";
import { CPR_SCHEMA } from "./CPR";
import { CPS_SCHEMA } from "./CPS";
import { CPT_SCHEMA } from "./CPT";
import { CUR_SCHEMA } from "./CUR";
import { DBT_SCHEMA } from "./DBT";
import { MTW_SCHEMA } from "./MTW";
import { MWD_SCHEMA } from "./MWD";
import { MWV_SCHEMA } from "./MWV";
import { NAK_SCHEMA } from "./NAK";
import { NRM_SCHEMA } from "./NRM";
import { NRX_SCHEMA } from "./NRX";
import { OSD_SCHEMA } from "./OSD";
import { PRC_SCHEMA } from "./PRC";
import { RMA_SCHEMA } from "./RMA";
import { RMB_SCHEMA } from "./RMB";
import { ROR_SCHEMA } from "./ROR";
import { ROT_SCHEMA } from "./ROT";
import { RPM_SCHEMA } from "./RPM";
import { RSA_SCHEMA } from "./RSA";
import { RSD_SCHEMA } from "./RSD";
import { RST_SCHEMA } from "./RST";
import { RTE_SCHEMA } from "./RTE";
import { SFI_SCHEMA } from "./SFI";
import { SID_SCHEMA } from "./SID";
import { XDR_SCHEMA } from "./XDR";
import { XTR_SCHEMA } from "./XTR";
import { ZDA_SCHEMA } from "./ZDA";
import { ZDL_SCHEMA } from "./ZDL";
import { ZFO_SCHEMA } from "./ZFO";
import { ZTG_SCHEMA } from "./ZTG";
import { TTD_SCHEMA } from "./TTD";
import { SPO_SCHEMA } from "./SPO";
import { SSD_SCHEMA } from "./SSD";
import { STN_SCHEMA } from "./STN";
import { TBR_SCHEMA } from "./TBR";
import { TBS_SCHEMA } from "./TBS";
import { TFR_SCHEMA } from "./TFR";
import { DCR_SCHEMA } from "./DCR";
import { DDC_SCHEMA } from "./DDC";
import { DLM_SCHEMA } from "./DLM";
import { DOR_SCHEMA } from "./DOR";
import { DPT_SCHEMA } from "./DPT";
import { DSC_SCHEMA } from "./DSC";
import { DSE_SCHEMA } from "./DSE";
import { DSI_SCHEMA } from "./DSI";
import { DSR_SCHEMA } from "./DSR";
import { DTM_SCHEMA } from "./DTM";
import { ECB_SCHEMA } from "./ECB";
import { ETL_SCHEMA } from "./ETL";
import { EVE_SCHEMA } from "./EVE";
import { FIR_SCHEMA } from "./FIR";
import { FSI_SCHEMA } from "./FSI";
import { GBS_SCHEMA } from "./GBS";
import { GEN_SCHEMA } from "./GEN";
import { GLC_SCHEMA } from "./GLC";
import { GLL_SCHEMA } from "./GLL";
import { GMP_SCHEMA } from "./GMP";
import { GNS_SCHEMA } from "./GNS";
import { GRS_SCHEMA } from "./GRS";
import { GST_SCHEMA } from "./GST";
import { GSV_SCHEMA } from "./GSV";
import { HDG_SCHEMA } from "./HDG";
import { HDT_SCHEMA } from "./HDT";
import { HMR_SCHEMA } from "./HMR";
import { HMS_SCHEMA } from "./HMS";
import { HTC_SCHEMA } from "./HTC";
import { HTD_SCHEMA } from "./HTD";
import { LCD_SCHEMA } from "./LCD";
import { LR1_SCHEMA } from "./LR1";
import { LR2_SCHEMA } from "./LR2";
import { LR3_SCHEMA } from "./LR3";
import { LRF_SCHEMA } from "./LRF";
import { LRI_SCHEMA } from "./LRI";
import { MEB_SCHEMA } from "./MEB";
import { MLA_SCHEMA } from "./MLA";
import { MSK_SCHEMA } from "./MSK";
import { MSS_SCHEMA } from "./MSS";
import { THS_SCHEMA } from "./THS";
import { TLB_SCHEMA } from "./TLB";
import { TLL_SCHEMA } from "./TLL";
import { TRC_SCHEMA } from "./TRC";
import { TSP_SCHEMA } from "./TSP";
import { TSR_SCHEMA } from "./TSR";
import { TTM_SCHEMA } from "./TTM";
import { TUT_SCHEMA } from "./TUT";
import { XTE_SCHEMA } from "./XTE";
import { DCN_SCHEMA } from "./DCN";
import { UID_SCHEMA } from "./UID";
import { VBW_SCHEMA } from "./VBW";
import { VDM_SCHEMA } from "./VDM";
import { VDO_SCHEMA } from "./VDO";
import { VDR_SCHEMA } from "./VDR";
import { VER_SCHEMA } from "./VER";
import { VHW_SCHEMA } from "./VHW";
import { VLW_SCHEMA } from "./VLW";
import { VPW_SCHEMA } from "./VPW";
import { VSD_SCHEMA } from "./VSD";
import { VSI_SCHEMA } from "./VSI";
import { VTG_SCHEMA } from "./VTG";
import { WAT_SCHEMA } from "./WAT";
import { WCV_SCHEMA } from "./WCV";
import { WNC_SCHEMA } from "./WNC";
import { WPL_SCHEMA } from "./WPL";
import { TXT_SCHEMA } from "./TXT";

const ALL_SCHEMAS = [
  GGA_SCHEMA, GSA_SCHEMA, RMC_SCHEMA,
  AAM_SCHEMA, ABK_SCHEMA, ABM_SCHEMA, ACA_SCHEMA, ACF_SCHEMA, ACG_SCHEMA, ACK_SCHEMA, ACM_SCHEMA, ACS_SCHEMA,
  ADS_SCHEMA, AFB_SCHEMA, AGA_SCHEMA, AID_SCHEMA, AIR_SCHEMA, AKD_SCHEMA, ALA_SCHEMA, ALM_SCHEMA, ALR_SCHEMA,
  APB_SCHEMA, ASN_SCHEMA, BBM_SCHEMA, BCG_SCHEMA, BCL_SCHEMA, BEC_SCHEMA, BOD_SCHEMA, BWC_SCHEMA, BWR_SCHEMA, BWW_SCHEMA,
  CBR_SCHEMA, CEK_SCHEMA, COP_SCHEMA, CPC_SCHEMA, CPD_SCHEMA, CPG_SCHEMA, CPN_SCHEMA, CPR_SCHEMA, CPS_SCHEMA, CPT_SCHEMA,
  CUR_SCHEMA, DBT_SCHEMA, MTW_SCHEMA, MWD_SCHEMA, MWV_SCHEMA, NAK_SCHEMA, NRM_SCHEMA, NRX_SCHEMA, OSD_SCHEMA, PRC_SCHEMA,
  RMA_SCHEMA, RMB_SCHEMA, ROR_SCHEMA, ROT_SCHEMA, RPM_SCHEMA, RSA_SCHEMA, RSD_SCHEMA, RST_SCHEMA, RTE_SCHEMA, SFI_SCHEMA,
  SID_SCHEMA, XDR_SCHEMA, XTR_SCHEMA, ZDA_SCHEMA, ZDL_SCHEMA, ZFO_SCHEMA, ZTG_SCHEMA, TTD_SCHEMA, SPO_SCHEMA, SSD_SCHEMA,
  STN_SCHEMA, TBR_SCHEMA, TBS_SCHEMA, TFR_SCHEMA, DCR_SCHEMA, DDC_SCHEMA, DLM_SCHEMA, DOR_SCHEMA, DPT_SCHEMA,
  DSC_SCHEMA, DSE_SCHEMA, DSI_SCHEMA, DSR_SCHEMA, DTM_SCHEMA, ECB_SCHEMA, ETL_SCHEMA, EVE_SCHEMA, FIR_SCHEMA, FSI_SCHEMA,
  GBS_SCHEMA, GEN_SCHEMA, GLC_SCHEMA, GLL_SCHEMA, GMP_SCHEMA, GNS_SCHEMA, GRS_SCHEMA, GST_SCHEMA, GSV_SCHEMA,
  HDG_SCHEMA, HDT_SCHEMA, HMR_SCHEMA, HMS_SCHEMA, HTC_SCHEMA, HTD_SCHEMA, LCD_SCHEMA, LR1_SCHEMA, LR2_SCHEMA,
  LR3_SCHEMA, LRF_SCHEMA, LRI_SCHEMA, MEB_SCHEMA, MLA_SCHEMA, MSK_SCHEMA, MSS_SCHEMA, THS_SCHEMA, TLB_SCHEMA, TLL_SCHEMA,
  TRC_SCHEMA, TSP_SCHEMA, TSR_SCHEMA, TTM_SCHEMA, TUT_SCHEMA, XTE_SCHEMA, DCN_SCHEMA,
  UID_SCHEMA, VBW_SCHEMA, VDM_SCHEMA, VDO_SCHEMA, VDR_SCHEMA, VER_SCHEMA, VHW_SCHEMA, VLW_SCHEMA, VPW_SCHEMA, VSD_SCHEMA,
  VSI_SCHEMA, VTG_SCHEMA, WAT_SCHEMA, WCV_SCHEMA, WNC_SCHEMA, WPL_SCHEMA, TXT_SCHEMA
];

for (const schema of ALL_SCHEMAS) {
  registerSchema(schema);
}
