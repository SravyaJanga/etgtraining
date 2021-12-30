<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

<form:form modelAttribute="taskmodel" methods="POST" action="taskform">
<table>
<tr>
<td>Task Name</td>
<td><form:input paths="taskname"/></td>
<td><form:errors paths="taskname" cssClass="error"/></td>

<td>Description</td>
<td><form:input paths="taskdescription"/></td>
<td><form:errors paths="taskdescription" cssClass="error"/></td>

<td>TaskId</td>
<td><form:input paths="taskid"/></td>
<td><form:errors paths="taskid" cssClass="error"/></td>


<td>OwnerId</td>
<td><form:input paths="ownerid"/></td>
<td><form:errors paths="ownerid" cssClass="error"/></td>


<td>Task Status</td>
<td><form:input paths="status"/></td>
<td><form:errors paths="status" cssClass="error"/></td>

<td>Task Notes</td>
<td><form:input paths="notes"/></td>
<td><form:errors paths="notess" cssClass="error"/></td>

<td>Priority</td>
<td><form:input paths="priority"/></td>
<td><form:errors paths="priority" cssClass="error"/></td>

<td>Bookmark</td>
<td><form:input paths="bookmark"/></td>
<td><form:errors paths="bookmark" cssClass="error"/></td>

</table>
</form:form>
</body>
</html>