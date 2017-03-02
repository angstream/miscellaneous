

Function readTable(SQL, connectionString)

	Dim connectionString
	Dim Connection
	Dim Recordset
	Dim oField

	
	'create an instance of the ADO connection and recordset objects
	Set Connection = Server.CreateObject("ADODB.Connection")
	Set Recordset = Server.CreateObject("ADODB.Recordset")

	'open the connection to the database
	Connection.Open connectionString
	Recordset.Open SQL,Connection

	GenerateTableFromRecordset(Recordset)

	'close the connection and recordset objects to free up resources
	Recordset.Close
	Set Recordset=nothing
	Connection.Close
	Set Connection=nothing

End Function


	Function GenerateTableFromRecordset(Recordset)
			
	'first of all determine whether there are any records 
		If Recordset.EOF Then 
			Response.Write("No records returned.") 
		Else 

			Dim tdo, tdc
			tdo = "<td>"
			tdc = "</td>"

			Response.Write Recordset.Fields.Count & " fields" & br
			Response.Write "<table class=''>"
			Response.Write "<thead>"
			Response.Write "<tr>"
			For Each oField In Recordset.Fields 
			   Response.Write  "<th>" &  oField.Name  &  "</th>"
			Next 			

			'if there are records then loop through the fields 
			Do While NOT Recordset.Eof   
				Response.Write "<tr>"
				For Each oField In Recordset.Fields 
					Response.Write tdo  &  oField.Value  & tdc
					Response.Write  chr(13)+chr(10)
				Next 
				Response.Write "</tr>"
				Response.Write  chr(13)+chr(10)
				Recordset.MoveNext     
			Loop
			
			Response.Write "</tr>"
			Response.Write "</thead>"
			Response.Write "</table>"
		End If
	End Function

