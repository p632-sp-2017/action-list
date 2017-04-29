import { preferenceColors } from '../app/lib/commons';

export const ActionItemProps = {
  processType: {
    label: 'process type label',
  },
  actionRequested: {
    label: 'action requested label',
  },
  initiator: 'initiator',
  creationDate: 'creation date',
  processInstanceStatus: {
    label: 'process instance status',
  },
};

export const Middlewares = [];

export const HeaderProps = {
  rowData: {
    title: 'Hello World',
    processInstanceStatus: {
      label: 'Enroute',
    },
  },
  dropdownColors: {
    Saved: preferenceColors.white,
    Initiated: preferenceColors.white,
    Disapproved: preferenceColors.white,
    Enroute: preferenceColors.white,
    Approved: preferenceColors.white,
    Final: preferenceColors.white,
    Processed: preferenceColors.white,
    Exception: preferenceColors.white,
    Cancel: preferenceColors.white,
  },
  index: 3,
  isActive: true,
};

export const InitialState = {
  actionItemsReducer: {
    sortValue: 'test',
    filterStatus: {
      documentRouteStatus: 'All',
      documentType: 'All',
      documentCreationDate: 'All',
      documentAssignedDate: 'All',
      actionRequested: 'All',
    },
  },
};
