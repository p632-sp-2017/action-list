/* eslint quotes: [2, "double"]*/
/* eslint-env es6*/
/* rule has been disabled to avoid discrepancy with JSON to string conversion */
export function getListJSON() {
  const str = "[{\"id\":\"12345789\",\"title\":\"Document 1\",\"processType\":\"RAC.ResourcePoolRequest\",\"initiator\":\"fraferna\",\"initiatorDisplayName\":\"Fernandez, Francis Paul\",\"content\":\"\",\"referenceId\":\"456789123\",\"status\":\"R\",\"created\":\"2017-02-01T23:58:37-05:00\",\"lastUpdated\":\"2017-02-01T23:58:44-05:00\",\"displayStatus\":\"ENROUTE\",\"_links\":{\"self\":{\"href\":\"https://wrkflw-unt.apps-test.iu.edu/processInstances/123456789\"},\"processInstance\":{\"href\":\"https://wrkflw-unt.apps-test.iu.edu/processInstances/123456789\"},\"actions\":{\"href\":\"https://wrkflw-unt.apps-test.iu.edu/processInstances/123456789/actions\"},\"variables\":{\"href\":\"https://wrkflw-unt.apps-test.iu.edu/processInstances/123456789/variables\"},\"routeLog\":{\"href\":\"https://apps-test.iu.edu/kr-unt/workflow/documents/123456789/log\"}}},{\"id\":\"12345678\",\"title\":\"Document 2\",\"processType\":\"RAC.ResourcePoolRequest\",\"initiator\":\"fraferna\",\"initiatorDisplayName\":\"Fernandez, Francis Paul\",\"content\":\"\",\"referenceId\":\"456789123\",\"status\":\"R\",\"created\":\"2017-02-01T23:58:37-05:00\",\"lastUpdated\":\"2017-02-01T23:58:44-05:00\",\"displayStatus\":\"ENROUTE\",\"_links\":{\"self\":{\"href\":\"https://wrkflw-unt.apps-test.iu.edu/processInstances/123456789\"},\"processInstance\":{\"href\":\"https://wrkflw-unt.apps-test.iu.edu/processInstances/123456789\"},\"actions\":{\"href\":\"https://wrkflw-unt.apps-test.iu.edu/processInstances/123456789/actions\"},\"variables\":{\"href\":\"https://wrkflw-unt.apps-test.iu.edu/processInstances/123456789/variables\"},\"routeLog\":{\"href\":\"https://apps-test.iu.edu/kr-unt/workflow/documents/123456789/log\"}}},{\"id\":\"23456789\",\"title\":\"Document 3\",\"processType\":\"RAC.ResourcePoolRequest\",\"initiator\":\"fraferna\",\"initiatorDisplayName\":\"Fernandez, Francis Paul\",\"content\":\"\",\"referenceId\":\"456789123\",\"status\":\"R\",\"created\":\"2017-02-01T23:58:37-05:00\",\"lastUpdated\":\"2017-02-01T23:58:44-05:00\",\"displayStatus\":\"ENROUTE\",\"_links\":{\"self\":{\"href\":\"https://wrkflw-unt.apps-test.iu.edu/processInstances/123456789\"},\"processInstance\":{\"href\":\"https://wrkflw-unt.apps-test.iu.edu/processInstances/123456789\"},\"actions\":{\"href\":\"https://wrkflw-unt.apps-test.iu.edu/processInstances/123456789/actions\"},\"variables\":{\"href\":\"https://wrkflw-unt.apps-test.iu.edu/processInstances/123456789/variables\"},\"routeLog\":{\"href\":\"https://apps-test.iu.edu/kr-unt/workflow/documents/123456789/log\"}}},{\"id\":\"13456789\",\"title\":\"Document 4\",\"processType\":\"RAC.ResourcePoolRequest\",\"initiator\":\"fraferna\",\"initiatorDisplayName\":\"Fernandez, Francis Paul\",\"content\":\"\",\"referenceId\":\"456789123\",\"status\":\"R\",\"created\":\"2017-02-01T23:58:37-05:00\",\"lastUpdated\":\"2017-02-01T23:58:44-05:00\",\"displayStatus\":\"ENROUTE\",\"_links\":{\"self\":{\"href\":\"https://wrkflw-unt.apps-test.iu.edu/processInstances/123456789\"},\"processInstance\":{\"href\":\"https://wrkflw-unt.apps-test.iu.edu/processInstances/123456789\"},\"actions\":{\"href\":\"https://wrkflw-unt.apps-test.iu.edu/processInstances/123456789/actions\"},\"variables\":{\"href\":\"https://wrkflw-unt.apps-test.iu.edu/processInstances/123456789/variables\"},\"routeLog\":{\"href\":\"https://apps-test.iu.edu/kr-unt/workflow/documents/123456789/log\"}}},{\"id\":\"12345689\",\"title\":\"Document 5\",\"processType\":\"RAC.ResourcePoolRequest\",\"initiator\":\"fraferna\",\"initiatorDisplayName\":\"Fernandez, Francis Paul\",\"content\":\"\",\"referenceId\":\"456789123\",\"status\":\"R\",\"created\":\"2017-02-01T23:58:37-05:00\",\"lastUpdated\":\"2017-02-01T23:58:44-05:00\",\"displayStatus\":\"ENROUTE\",\"_links\":{\"self\":{\"href\":\"https://wrkflw-unt.apps-test.iu.edu/processInstances/123456789\"},\"processInstance\":{\"href\":\"https://wrkflw-unt.apps-test.iu.edu/processInstances/123456789\"},\"actions\":{\"href\":\"https://wrkflw-unt.apps-test.iu.edu/processInstances/123456789/actions\"},\"variables\":{},\"routeLog\":{}}}]";
  return str;
}

export function getItemJSON() {
  const str = "{\"id\":\"12345\",\"processInstanceId\":\"23456\",\"processType\":{\"name\":\"SomeProcess\",\"label\":\"Some Process\"},\"title\":\"Hello, world!\",\"processInstanceStatus\":{\"code\":\"R\",\"label\":\"Enroute\"},\"actionRequested\":{\"code\":\"A\",\"label\":\"Approve\"},\"initiator\":\"Francis Fernandez\",\"delegator\":\"Eric Westfall\",\"group\":\"ESI Developers\",\"routeNodes\":[\"Manager Approval\"],\"lastApprovedDate\":\"2017-02-03T11:30:00\",\"creationDate\":\"2017-02-03T12:00:00\",\"_links\":{\"self\":{\"href\":\"https://workflow.iu.edu/actions/12345\"},\"actionList\":{\"href\":\"https://workflow.iu.edu/actions\"},\"processInstance\":{\"href\":\"https://workflow.iu.edu/processInstances/23456/open\"},\"log\":{\"href\":\"https://workflow.iu.edu/processInstances/23456/log\"},\"initiator\":{\"href\":\"https://people.iu.edu/fraferna\"}}}";
  return str;
}

export function getPrefJSON() {
  const str = "{\"pageSize\":10,\"refreshRate\":15,\"showPrimaryDelegations\":true,\"showSecondaryDelegations\":false,\"showSummary\":true,\"showFilters\":true,\"columns\":[{\"name\":\"processInstanceId\",\"title\":\"Process Instance\",\"link\":\"processInstance\"},{\"name\":\"processType\",\"title\":\"Process Type\"},{\"name\":\"title\",\"title\":\"Title\"},{\"name\":\"log\",\"title\":\"Log\",\"icon\":\"log\",\"link\":\"log\"}],\"colors\":{\"S\":\"red\",\"A\":\"orange\"},\"notifications\":{\"defaultFrequency\":\"immediate\",\"primaryDelegation\":true,\"secondaryDelegation\":false,\"approval\":true,\"complete\":true,\"acknowledge\":true,\"fyi\":false,\"processTypeOverrides\":{\"Some Process\":\"daily\"}}}";
  return str;
}

// Hack to initialize rowId and expanded state
function manipulateList(list) {
  const temp = list;
  for (let i = 0; i < temp.length; i += 1) {
    temp[i].expanded = false;
  }
  return temp;
}

export function getHashJSON() {
  const list = manipulateList(JSON.parse(getListJSON()));
  const hash = {};
  list.forEach((it) => { hash[it.id] = it; });
  return hash;
}
