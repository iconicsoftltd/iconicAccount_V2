import CreateQuotationPage from "@/components/common/modals/CrateQuotation";
import QuotationViewPage from "@/components/common/modals/QuotationView";
import ViewStaffEmployee from "@/components/common/modals/ViewStaffEmployee";
import AdminHome from "@/pages/dashboard/AdminHome";
import ChangePasswordPage from "@/pages/dashboard/ChangePassword";
import CommingSoonPage from "@/pages/dashboard/CommingSoon";
import CompanyProfilePage from "@/pages/dashboard/Profile";
import ChartOfAccountsReport from "@/pages/dashboard/accounting/ChartOfAccountsReport";
import GroupsList from "@/pages/dashboard/accounting/GroupList";
import LedgersPage from "@/pages/dashboard/accounting/Ledgers";
import ParticularAccountListPage from "@/pages/dashboard/accounting/PerticularAccountList";
import ProfitLoss from "@/pages/dashboard/accounting/ProfitLoss";
import BalanceSheetReport from "@/pages/dashboard/acountingReport/BalanceSheetReport";
import CashInHandReport from "@/pages/dashboard/acountingReport/CashInHandReport";
import GeneralLedgerReport from "@/pages/dashboard/acountingReport/GeneralLedgerReport";
import IncomeStatementReport from "@/pages/dashboard/acountingReport/IncomeStatementReport";
import LedgerReportPage from "@/pages/dashboard/acountingReport/LedgerReportPage";
import OwnerSecurityReport from "@/pages/dashboard/acountingReport/OwnerSecurityReport";
import ProfitLossReport from "@/pages/dashboard/acountingReport/ProfitLossReport";
import PurchaseSummaryReport from "@/pages/dashboard/acountingReport/PurchaseSummaryReport";
import SalesSummaryReport from "@/pages/dashboard/acountingReport/SalesSummaryReport";
import TrialBalancePage from "@/pages/dashboard/acountingReport/TrialBalance";
import TrialBalanceReport from "@/pages/dashboard/acountingReport/TrialBalanceReport";
import BankLogPage from "@/pages/dashboard/audit/BankLog";
import BranchAssignLogPage from "@/pages/dashboard/audit/BranchAssignLog";
import BranchLogPage from "@/pages/dashboard/audit/BranchLog";
import BrandLogPage from "@/pages/dashboard/audit/BrandLog";
import CategoryLogPage from "@/pages/dashboard/audit/CategoryLog";
import ChequeLogPage from "@/pages/dashboard/audit/ChequeLog";
import ColorLogPage from "@/pages/dashboard/audit/ColorLog";
import DepartmentLogPage from "@/pages/dashboard/audit/DepartmentLog";
import DesignationLogPage from "@/pages/dashboard/audit/DesignationLog";
import EmployeeLogPage from "@/pages/dashboard/audit/EmployeeLog";
import LeaveApplyLogPage from "@/pages/dashboard/audit/LeaveApplyLog";
import LeaveDaySetupLogPage from "@/pages/dashboard/audit/LeaveDaySetupLog";
import ProductLogPage from "@/pages/dashboard/audit/ProductLog";
import ProductVariationLogPage from "@/pages/dashboard/audit/ProductVariationLog";
import PurchaseLogPage from "@/pages/dashboard/audit/PurchaseLog";
import PurchaseReturnLogPage from "@/pages/dashboard/audit/PurchaseReturnLog";
import QuotationLogPage from "@/pages/dashboard/audit/QuotationLog";
import RoleLogPage from "@/pages/dashboard/audit/RoleLog";
import SalaryLogPage from "@/pages/dashboard/audit/SalaryLog";
import SalaryStructureLogPage from "@/pages/dashboard/audit/SalaryStructureLog";
import SalesLogPage from "@/pages/dashboard/audit/SalesLog";
import SalesReturnLogPage from "@/pages/dashboard/audit/SalesReturnLog";
import ServiceLogPage from "@/pages/dashboard/audit/ServiceLog";
import ServiceSalesLogPage from "@/pages/dashboard/audit/ServiceSalesLog";
import SizeLogPage from "@/pages/dashboard/audit/SizeLog";
import SubCategoryLogPage from "@/pages/dashboard/audit/SubCategoryLog";
import UnitLogPage from "@/pages/dashboard/audit/UnitLog";
import UserLogPage from "@/pages/dashboard/audit/UserLog";
import VoucherLogPage from "@/pages/dashboard/audit/VoucherLog";
import BranchList from "@/pages/dashboard/branch/BranchList";
import BranchAssignList from "@/pages/dashboard/branchAssign/BranchAssignList";
import BankList from "@/pages/dashboard/chequeManager/BankList";
import ChequeList from "@/pages/dashboard/chequeManager/ChequeList";
import CrmDashboardPage from "@/pages/dashboard/crm/crmDashboard/CrmDashboard";
import PendingCallListPage from "@/pages/dashboard/crm/pendingCall/PendingCall";
import PendingCallViewPage from "@/pages/dashboard/crm/pendingCall/PendingCallView";
import CrmReportingPage from "@/pages/dashboard/crm/report/CrmReporting";
import CrmReportingListPage from "@/pages/dashboard/crm/report/CrmReportingList";
import TodaysCallListPage from "@/pages/dashboard/crm/todaysCall/TodaysCall";
import TodaysCallViewPage from "@/pages/dashboard/crm/todaysCall/TodaysCallView";
import TodaysFollowUpPage from "@/pages/dashboard/crm/todaysFollowUp/TodaysFollowUp";
import DepartmentList from "@/pages/dashboard/department/DepartmentList";
import DesignationList from "@/pages/dashboard/designation/DesignationList";
import InventoryReportPage from "@/pages/dashboard/inventory/inventory-report/InventoryReportPage";
import LeaveApplyList from "@/pages/dashboard/inventory/leave/LeaveApplyList";
import LeaveDaySetupList from "@/pages/dashboard/inventory/leave/LeaveDaySetupList";
import CreateEditPurchaseForm from "@/pages/dashboard/inventory/purchase/CreateEditPurchase";
import CreateEditPurchaseReturnForm from "@/pages/dashboard/inventory/purchase/CreateEditPurchaseReturn";
import PurchaseList from "@/pages/dashboard/inventory/purchase/PurchaseList";
import PurchaseReturn from "@/pages/dashboard/inventory/purchase/PurchaseReturn";
import CreateEditQuotation from "@/pages/dashboard/inventory/quotation/CreateEditQuotation";
import QuotationList from "@/pages/dashboard/inventory/quotation/QuotationList";
import SalaryStructure from "@/pages/dashboard/inventory/salary/SalaryStructure";
import CreateEditSales from "@/pages/dashboard/inventory/sales/CreateEditSales";
import CreateEditSalesReturn from "@/pages/dashboard/inventory/sales/CreateEditSalesReturn";
import SalesList from "@/pages/dashboard/inventory/sales/SalesList";
import SalesReturnList from "@/pages/dashboard/inventory/sales/SalesReturnList";
import ServiceList from "@/pages/dashboard/inventory/service/ServiceList";
import CreateEditServiceSales from "@/pages/dashboard/inventory/serviceSales/CreateEditServiceSales";
import ServiceSalesList from "@/pages/dashboard/inventory/serviceSales/ServiceSalesList";
import BrandsPage from "@/pages/dashboard/productManagement/brand/BrandsPage";
import CategoryList from "@/pages/dashboard/productManagement/category/CategoryList";
import ColorsPage from "@/pages/dashboard/productManagement/color/ColorsPage";
import ProductsPage from "@/pages/dashboard/productManagement/product/ProductsPage";
import ProductVariationsPage from "@/pages/dashboard/productManagement/productVariation/ProductVariationsPage";
import SizesPage from "@/pages/dashboard/productManagement/size/SizesPage";
import SubCategoryList from "@/pages/dashboard/productManagement/subCategory/SubCategoryList";
import UnitsPage from "@/pages/dashboard/productManagement/unit/UnitsPage";
import RoleList from "@/pages/dashboard/role/RoleList";
import CreateServiceSalePage from "@/pages/dashboard/service/CrateServiceSale";
import ServiceSaleListPage from "@/pages/dashboard/service/ServiceSaleList";
import EmployeeSalaryList from "@/pages/dashboard/staffEmployee/EmployeeSalaryList";
import StaffEmployeeList from "@/pages/dashboard/staffEmployee/StaffEmployeeList";
import UserList from "@/pages/dashboard/user/UserList";
import ContraVoucherList from "@/pages/dashboard/voucher/contraVoucher/ContraVoucherList";
import CreateContraVoucher from "@/pages/dashboard/voucher/contraVoucher/CreateContraVoucher";
import EditContraVoucher from "@/pages/dashboard/voucher/contraVoucher/EditContraVoucher";
import ViewSingleContraVoucher from "@/pages/dashboard/voucher/contraVoucher/ViewSingleContraVoucher";
import CreateExpanseVoucher from "@/pages/dashboard/voucher/expanseVoucher/CreateExpanseVoucher";
import EditExpenseVoucher from "@/pages/dashboard/voucher/expanseVoucher/EditExpenseVoucher";
import ExpanseVoucherList from "@/pages/dashboard/voucher/expanseVoucher/ExpanseVoucherList";
import ViewSingleExpanseVoucher from "@/pages/dashboard/voucher/expanseVoucher/ViewSingleExpanseVoucher";
import CreateJournalVoucher from "@/pages/dashboard/voucher/journalVoucher/CreateJournalVoucher";
import EditJournalVoucher from "@/pages/dashboard/voucher/journalVoucher/EditJournalVoucher";
import JournalVoucherList from "@/pages/dashboard/voucher/journalVoucher/JournalVoucherList";
import ViewSingleJournalVoucher from "@/pages/dashboard/voucher/journalVoucher/ViewSingleJournalVoucher";
import CreatePaymentVoucher from "@/pages/dashboard/voucher/paymentVoucher/CreatePaymentVoucher";
import EditPaymentVoucher from "@/pages/dashboard/voucher/paymentVoucher/EditPaymentVoucher";
import PaymentVoucherList from "@/pages/dashboard/voucher/paymentVoucher/PaymentVoucherList";
import ViewSinglePaymentVoucherList from "@/pages/dashboard/voucher/paymentVoucher/ViewSinglePaymentVoucherList";
import CreateReceiptVoucherList from "@/pages/dashboard/voucher/receiptVucher/CreateReceiptVoucherList";
import EditVoucher from "@/pages/dashboard/voucher/receiptVucher/EditVoucher";
import ReceiptVoucherList from "@/pages/dashboard/voucher/receiptVucher/ReceiptVoucherList";
import ViewSingleReceiptVoucherList from "@/pages/dashboard/voucher/receiptVucher/ViewSingleReceiptVoucherList";
import { ReactNode } from "react";

export interface IRouteProps {
  path: string;
  element: ReactNode;
  loader?: any;
}

export const adminRoutes: IRouteProps[] = [
  // ===================== Dashboard Module Start =====================
  {
    path: "/accounts-admin-portal",
    element: <AdminHome />,
  },
  {
    path: "admin_home",
    element: <AdminHome />,
  },
  // ===================== Dashboard Module End =====================

  // ===================== User Start =====================
  {
    path: "profile",
    element: <CompanyProfilePage />,
  },
  {
    path: "admin-change-password",
    element: <ChangePasswordPage />,
  },
  // ===================== User End =====================

  // ===================== branch start =====================

  {
    path: "branch-list",
    element: <BranchList />,
  },

  {
    path: "Branch_Assign",
    element: <BranchAssignList />,
  },

  // ===================== branch end =====================

  // ===================== User start =====================

  {
    path: "user",
    element: <UserList />,
  },

  // ===================== User end =====================

  // ===================== Voucher Module Start =====================
  // --- Receipt Voucher ---
  {
    path: "receipt-voucher",
    element: <ReceiptVoucherList />,
  },
  {
    path: "create-receipt-voucher",
    element: <CreateReceiptVoucherList />,
  },
  {
    path: "view-receipt-voucher/:id",
    element: <ViewSingleReceiptVoucherList />,
  },
  {
    path: "edit-receipt-voucher/:id",
    element: <EditVoucher />,
  },

  // --- Payment Voucher ---
  {
    path: "payment-voucher",
    element: <PaymentVoucherList />,
  },
  {
    path: "create-payment-voucher",
    element: <CreatePaymentVoucher />,
  },
  {
    path: "view-payment-voucher/:id",
    element: <ViewSinglePaymentVoucherList />,
  },
  {
    path: "edit-payment-voucher/:id",
    element: <EditPaymentVoucher />,
  },

  // --- Contra Voucher ---
  {
    path: "contra-voucher",
    element: <ContraVoucherList />,
  },
  {
    path: "create-contra-voucher",
    element: <CreateContraVoucher />,
  },
  {
    path: "view-contra-voucher/:id",
    element: <ViewSingleContraVoucher />,
  },
  {
    path: "edit-contra-voucher/:id",
    element: <EditContraVoucher />,
  },

  // --- Journal Voucher ---
  {
    path: "journal-voucher",
    element: <JournalVoucherList />,
  },
  {
    path: "create-journal-voucher",
    element: <CreateJournalVoucher />,
  },
  {
    path: "view-journal-voucher/:id",
    element: <ViewSingleJournalVoucher />,
  },
  {
    path: "edit-journal-voucher/:id",
    element: <EditJournalVoucher />,
  },

  // --- Expense Voucher ---
  {
    path: "expanse-voucher",
    element: <ExpanseVoucherList />,
  },
  {
    path: "create-expanse-voucher",
    element: <CreateExpanseVoucher />,
  },
  {
    path: "view-expanse-voucher/:id",
    element: <ViewSingleExpanseVoucher />,
  },
  {
    path: "edit-expanse-voucher/:id",
    element: <EditExpenseVoucher />,
  },
  // ===================== Voucher Module End =====================

  // ===================== Accounting Module Start =====================
  {
    path: "accounting-groups",
    element: <GroupsList />,
  },
  {
    path: "accounting-ledgers",
    element: <LedgersPage />,
  },
  {
    path: "accounting-particulars",
    element: <ParticularAccountListPage />,
  },
  {
    path: "accounting-chart-of-account",
    element: <ChartOfAccountsReport />,
  },
  {
    path: "report-balance-sheet",
    element: <BalanceSheetReport />,
  },
  {
    path: "report-income-statement",
    element: <IncomeStatementReport />,
  },
  {
    path: "report-owner-security",
    element: <OwnerSecurityReport />,
  },
  // {
  //   path: "report-voucher-ledger",
  //   element: <VoucherLedgerReport />,
  // },
  {
    path: "report-general-ledger",
    element: <GeneralLedgerReport />,
  },
  {
    path: "report-purchase-summary",
    element: <PurchaseSummaryReport />,
  },
  {
    path: "report-sales-summary",
    element: <SalesSummaryReport />,
  },
  {
    path: "report-cash-in-hand",
    element: <CashInHandReport />,
  },
  {
    path: "report-trial-balance",
    element: <TrialBalanceReport />,
  },
  {
    path: "ledger-report-on",
    element: <LedgerReportPage />,
  },
  {
    path: "report-profit-and-loss",
    element: <ProfitLossReport />,
  },
  {
    path: "accounting-profit-loss",
    element: <ProfitLoss />,
  },
  {
    path: "accounting-trial-balance",
    element: <CommingSoonPage />,
  },
  {
    path: "accounting-general-ledger",
    element: <CommingSoonPage />,
  },
  {
    path: "accounting-second-general-ledger",
    element: <CommingSoonPage />,
  },
  {
    path: "accounting-voucher-ledger",
    element: <CommingSoonPage />,
  },
  {
    path: "trial-balance",
    element: <TrialBalancePage />,
  },
  // ===================== Accounting Module End =====================

  // ===================== Service Management Module Start =====================

  {
    path: "service-sale",
    element: <ServiceSaleListPage />,
  },
  {
    path: "create-service-sale",
    element: <CreateServiceSalePage />,
  },
  {
    path: "service-sales-list",
    element: <ServiceSalesList />,
  },
  {
    path: "service-sales",
    element: <CreateEditServiceSales />,
  },
  // ===================== Service Management Module End =====================

  // ===================== Staff & User Management Module Start =====================
  {
    path: "staff-employee",
    element: <StaffEmployeeList />,
  },
  {
    path: "staff-employee/:id",
    element: <ViewStaffEmployee />,
  },
  {
    path: "user-role",
    element: <RoleList />,
  },
  {
    path: "user-department",
    element: <DepartmentList />,
  },
  {
    path: "user-designation",
    element: <DesignationList />,
  },
  // ===================== Staff & User Management Module End =====================

  // ===================== Inventory Module Start =====================
  {
    path: "unit-list",
    element: <UnitsPage />,
  },
  {
    path: "size-list",
    element: <SizesPage />,
  },
  {
    path: "color-list",
    element: <ColorsPage />,
  },
  {
    path: "product-list",
    element: <ProductsPage />,
  },
  {
    path: "product-variation-list",
    element: <ProductVariationsPage />,
  },
  {
    path: "brand-list",
    element: <BrandsPage />,
  },
  {
    path: "category-list",
    element: <CategoryList />,
  },
  {
    path: "subCategory-list",
    element: <SubCategoryList />,
  },
  {
    path: "purchase",
    element: <PurchaseList />,
  },
  {
    path: "purchase-return",
    element: <PurchaseReturn />,
  },
  {
    path: "create-purchase",
    element: <CreateEditPurchaseForm />,
  },
  {
    path: "create-purchase-return",
    element: <CreateEditPurchaseReturnForm />,
  },

  {
    path: "sales-return",
    element: <SalesReturnList />,
  },
  {
    path: "create-sales-return",
    element: <CreateEditSalesReturn />,
  },
  {
    path: "sales-list",
    element: <SalesList />,
  },
  {
    path: "sales",
    element: <CreateEditSales />,
  },
  {
    path: "quotation-list",
    element: <QuotationList />,
  },
  {
    path: "quotation",
    element: <CreateEditQuotation />,
  },
  {
    path: "leave-apply",
    element: <LeaveApplyList />,
  },
  {
    path: "leave-day-setup",
    element: <LeaveDaySetupList />,
  },
  {
    path: "salary-structure",
    element: <SalaryStructure />,
  },
  {
    path: "employee-salary",
    element: <EmployeeSalaryList />,
  },
  {
    path: "service-list",
    element: <ServiceList />,
  },
  {
    path: "inventory-report",
    element: <InventoryReportPage />,
  },

  // ===================== Inventory Module End =====================

  // ===================== Payroll Module Start =====================
  {
    path: "payroll-salary-structure",
    element: <CommingSoonPage />,
  },
  {
    path: "payroll-employee-payment",
    element: <CommingSoonPage />,
  },
  {
    path: "payroll-attendance",
    element: <CommingSoonPage />,
  },
  {
    path: "payroll-leave-setup",
    element: <CommingSoonPage />,
  },
  {
    path: "payroll-leave-apply",
    element: <CommingSoonPage />,
  },
  {
    path: "payroll-leave-apply-list",
    element: <CommingSoonPage />,
  },
  {
    path: "employee-salary",
    element: <EmployeeSalaryList />,
  },
  // ===================== Payroll Module End =====================

  // ===================== Audit Log Module Start =====================
  {
    path: "branch-audit",
    element: <BranchLogPage />,
  },
  {
    path: "department-audit",
    element: <DepartmentLogPage />,
  },
  {
    path: "designation-audit",
    element: <DesignationLogPage />,
  },
  {
    path: "voucher-audit",
    element: <VoucherLogPage />,
  },
  {
    path: "cheque-audit",
    element: <ChequeLogPage />,
  },
  {
    path: "employee-audit",
    element: <EmployeeLogPage />,
  },
  {
    path: "role-audit",
    element: <RoleLogPage />,
  },
  {
    path: "user-audit",
    element: <UserLogPage />,
  },
  {
    path: "branch-assign-audit",
    element: <BranchAssignLogPage />,
  },
  {
    path: "bank-audit",
    element: <BankLogPage />,
  },
  {
    path: "category-audit",
    element: <CategoryLogPage />,
  },
  {
    path: "sub-category-audit",
    element: <SubCategoryLogPage />,
  },
  {
    path: "unit-audit",
    element: <UnitLogPage />,
  },
  {
    path: "brand-audit",
    element: <BrandLogPage />,
  },
  {
    path: "product-audit",
    element: <ProductLogPage />,
  },
  {
    path: "size-audit",
    element: <SizeLogPage />,
  },
  {
    path: "color-audit",
    element: <ColorLogPage />,
  },
  {
    path: "product-variation-audit",
    element: <ProductVariationLogPage />,
  },
  {
    path: "purchase-audit",
    element: <PurchaseLogPage />,
  },
  {
    path: "purchase-return-audit",
    element: <PurchaseReturnLogPage />,
  },
  {
    path: "sales-audit",
    element: <SalesLogPage />,
  },
  {
    path: "sales-return-audit",
    element: <SalesReturnLogPage />,
  },
  {
    path: "quotation-audit",
    element: <QuotationLogPage />,
  },
  {
    path: "service-audit",
    element: <ServiceLogPage />,
  },
  {
    path: "service-sales-audit",
    element: <ServiceSalesLogPage />,
  },
  {
    path: "leave-apply-audit",
    element: <LeaveApplyLogPage />,
  },
  {
    path: "leave-day-setup-audit",
    element: <LeaveDaySetupLogPage />,
  },
  {
    path: "salary-structure-audit",
    element: <SalaryStructureLogPage />,
  },
  {
    path: "salary-audit",
    element: <SalaryLogPage />,
  },
  // ===================== Audit Log Module End =====================

  // ===================== Quotation Module Start =====================
  {
    path: "quotation-create",
    element: <CreateQuotationPage />,
  },
  {
    path: "quotation-view",
    element: <QuotationViewPage />,
  },
  // ===================== Quotation Module End =====================

  // ===================== Reports Module Start =====================
  {
    path: "report",
    element: <CommingSoonPage />,
  },
  // ===================== Reports Module End =====================

  // ===================== Settings & Access Module Start =====================
  {
    path: "settings",
    element: <CommingSoonPage />,
  },
  {
    path: "access-setup",
    
    element: <CommingSoonPage />,
  },
  // ===================== Settings & Access Module End =====================

  // ===================== CRM Module Start =====================
  {
    path: "crm-dashboard",
    element: <CrmDashboardPage />,
  },
  {
    path: "todays-call",
    element: <TodaysCallListPage />,
  },
  {
    path: "todays-call/:id",
    element: <TodaysCallViewPage />,
  },
  {
    path: "pending-call",
    element: <PendingCallListPage />,
  },
  {
    path: "pending-call/:id",
    element: <PendingCallViewPage />,
  },
  {
    path: "todays-follow-up",
    element: <TodaysFollowUpPage />,
  },
  {
    path: "crm-reporting",
    element: <CrmReportingPage />,
  },
  {
    path: "crm-reporting/project-wise-report",
    element: <CrmReportingListPage />,
  },
  {
    path: "crm-reporting/lead-status-wise-report",
    element: <CrmReportingListPage />,
  },
  {
    path: "crm-reporting/lead-source-wise-report",
    element: <CrmReportingListPage />,
  },
  {
    path: "crm-reporting/assign-user-wise-report",
    element: <CrmReportingListPage />,
  },
  // ===================== CRM Module End =====================

  // ===================== Cheque Manager Module Start =====================
  {
    path: "bank",
    element: <BankList />,
  },
  {
    path: "cheque",
    element: <ChequeList />,
  },
  // ===================== Cheque Manager Module End =====================
];
