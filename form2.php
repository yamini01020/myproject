<html>
<head>

<style>

     table
	 {
		width: 40%;
     }
		td.one
		{
		width: 50%;
		text-align: right;
		padding: 8px;
		}

     tr:nth-child(even) {background-color: #f2f2f2;}
	td.heading
	{
    background-color: #f2f2f2;
    color: white;

	}
</style>

</head>
<body>
<b><i>
<center>
<?php

$fname=$_POST['fname'];
$lname=$_POST['lname'];
$pname=$_POST['pname'];
$mail=$_POST['mail'];
$number=$_POST['number'];
$caste=$_POST['caste'];
$gender=$_POST['gender'];
$income=$_POST['income'];
$address=$_POST['address'];
$type=$_POST['type'];
$p1=$_POST['p1'];
$p2=$_POST['p2'];
$p3=$_POST['p3'];
$p4=$_POST['p4'];
$regn=$_POST['regn'];
$grp=$_POST['grp'];
$board=$_POST['board'];
$marks=$_POST['marks'];
$boi=$_POST['boi'];
$moi=$_POST['moi'];



?>



<table >
  <tr>
    <td class='heading' colspan='2' align='center' valign='middle'><h2>EAMCET Application details</h2></td>


  <tr>
    <td class='one'>First Name</td>
    <td><?php print $fname; ?></td>

  </tr>
  <tr>
    <td class='one'>Last Name</td>
    <td><?php print $lname; ?></td>

  </tr>
  <tr>
    <td class='one'>Father Name</td>
    <td><?php print $pname; ?></td>

  </tr>
  <tr>
    <td class='one'>E-mail</td>
    <td><?php print $mail; ?></td>

  </tr>
  <tr>
    <td class='one'>Mobile number</td>
    <td><?php print $number; ?></td>

  </tr>
  <tr>
    <td class='one'>Category</td>
    <td><?php
            if(value=='OC')
				print "OC";
            elseif(value=='BC')
				print "BC";
            elseif(value=='SC')
				print "SC";
            elseif(value=='ST')
				print "ST";
            else
				print "Others";
        ?></td>

  </tr>
  <tr>
    <td class='one'>Gender</td>
    <td><?php
			if(value=='M')
				print "Male";
			else
				print "Female";
		?></td>

  </tr>
  <tr>
    <td class='one'>Parent's income</td>
    <td><?php print $income; ?></td>

  </tr>
  <tr>
    <td class='one'>Adddress of the applicant</td>
    <td><?php print $address; ?></td>

  </tr>
  <tr>
    <td class='one'>Method of Application</td>
    <td><?php
		if(value=='D')
			print "Direct";
		else
			print "Private";
	    ?></td>

  </tr>

  <tr>
    <td class='one'>Your preference of examination centre</td>
    <td>
       <OL start='1'>
        <LI><?php print $p1 ?></LI>
		<LI><?php print $p2 ?></LI>
		<LI><?php print $p3 ?></LI>
		<LI><?php print $p4 ?></LI>
       </Ol>

</td>

  </tr>
  <tr>
    <td class='one'>Region</td>
    <td><?php
		if(value=='AU')
			print "Andhra University";
		elseif(value=='JNTUK')
			print "Jawaharlal Nehru Technological University";
		elseif(value=='SVU')
			print "Sri Venkateswara University";
		else
			print "Invalid";
		?></td>

  </tr>
  <tr>
    <td class='one'>Group of Intermediate</td>
    <td><?php print $grp; ?></td>

  </tr>
  <tr>
    <td class='one'>Board of Intermediate</td>
    <td><?php print $boi; ?></td>

  </tr>
  <tr>
    <td class='one'>Intermediate Marks</td>
    <td><?php print $moi; ?></td>

  </tr>
  <tr>
    <td class='one'>SSC Board</td>
    <td><?php print $board; ?></td>

  </tr>
  <tr>
    <td class='one'>SSC Marks</td>
    <td><?php print $marks; ?></td>

  </tr>


</table>





</body>
</html>
