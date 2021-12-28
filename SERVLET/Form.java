package com.etg.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Form
 */

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
/** Simple servlet that reads three parameters from the html form */
public class Form extends HttpServlet {
 public void doGet(HttpServletRequest request,
 HttpServletResponse response)
throws ServletException, IOException {
 response.setContentType("text/html");
 PrintWriter out = response.getWriter();
 String title = "Your Information";
 out.println("<HTML>" +
 "<BODY BGCOLOR=\"#FDF5E6\">\n" +
 "<H1 ALIGN=CENTER>" + title + "</H1>\n" +
 "<UL>\n" +
 " <LI><B>First Name in Response</B>: "
 + request.getParameter("param1") + "\n" +
 " <LI><B>Last Name in Response</B>: "
 + request.getParameter("param2") + "\n" +
 " <LI><B>NickName in Response</B>: "
 + request.getParameter("param3") + "\n" +
 "</UL>\n" +
 "</BODY></HTML>");
 }
}