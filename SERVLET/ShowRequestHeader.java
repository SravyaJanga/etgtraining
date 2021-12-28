package com.etg.servlet;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class ShowRequestHeader
 */
@WebServlet("/Show")

public class ShowRequestHeader extends HttpServlet {
	 public void doGet(HttpServletRequest request,
	 HttpServletResponse response)
	throws ServletException, IOException {
	 response.setContentType("text/html");
	 PrintWriter out = response.getWriter();
	 String title = "Servlet Example: Showing Request Headers";
	 out.println("<HTML>" + "<B>Request Method: </B>" +request.getMethod() + "<BR>\n" +"<B>Request URI: </B>" +
	request.getRequestURI() + "<BR>\n" + "<B>Request Protocol: </B>" +request.getProtocol() + "<BR><BR>\n" +
			 "<TH>Header Name<TH>Header Value");
	 Enumeration headerNames = request.getHeaderNames();
	 while(headerNames.hasMoreElements()) {
	 String headerName = (String)headerNames.nextElement();
	 out.println("<TR><TD>" + headerName);
	 out.println(" <TD>" + request.getHeader(headerName));
	 }
	 
	 }
	}