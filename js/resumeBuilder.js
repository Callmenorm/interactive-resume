  var bio = {
    name: 'Michael Anderson',
    role: 'Web Developer',
    contacts: {
      mobile: '(801) 787 7726',
      email: 'normanganderson@gmail.com',
      bitbucket: 'bitbucket.org/callmenorm',
      location: 'Provo, Utah'
    },
    welcomeMessage: 'Welcome my people',
    skills: [
      'Javascript',
      'Angular',
      '.NET',
      'C',
      'C++'
    ],
    biopic: 'http://www.gravatar.com/avatar/f6555466525883d7e07cdf7677fd481f.png',
    display: function() {

    }
  };

  var education = {
    schools: [{
      name: 'BYU',
      location: 'Provo, UT',
      degree: 'Bachelors of Science',
      majors: ['Economics'],
      dates: 2009
    }, {
      name: 'Duke University',
      location: 'Durham, NC',
      degree: 'Masters',
      majors: ['Economics'],
      dates: 2012
    }],
    display: function() {

    }
  };

  var work = {
    jobs: [{
      employer: 'IBM',
      title: 'IT Specialist',
      location: 'Houston, TX',
      dates: 'May 2012 - Aug. 2014',
      description: 'Developed and maintained client API for HPSS'
    }, {
      employer: 'InsideSales.com',
      title: 'Senior Software Engineer',
      location: 'Provo, UT',
      dates: 'Aug. 2014 - Current',
      description: 'Developed new REST API for acquired project iHance, which is now Vision'
    }],
    display: function() {

    }
  };

  var projects = {
    projects: [{
      title: 'Feed Time',
      dates: 'Jan. 2015 - Current',
      description: 'Its a site to track baby feeding. Angular front-end, node.js backend'
    }],
    display: function() {}
  };

  var placeholders = {
    data: "%data%",
    contact: "%contact%"
  };

  function templateReplacer(replaceObj) {
    if (!replaceObj.template || !replaceObj.replacement || !replaceObj.placeHolder) {
      return "You didn't give a template or a replacement";
    }

    return replaceObj.template.replace(replaceObj.placeHolder, replaceObj.replacement);
  }

  function attachContactsToElement(jqueryObj) {
    jqueryObj.append(templateReplacer({
      template: HTMLmobile,
      replacement: bio.contacts.mobile,
      placeHolder: placeholders.data
    }));

    jqueryObj.append(templateReplacer({
      template: HTMLemail,
      replacement: bio.contacts.email,
      placeHolder: placeholders.data
    }));

    jqueryObj.append(templateReplacer({
      template: templateReplacer({
        template: HTMLcontactGeneric,
        replacement: "bitbucket:",
        placeHolder: placeholders.contact
      }),
      replacement: bio.contacts.bitbucket,
      placeHolder: placeholders.data
    }));

    jqueryObj.append(templateReplacer({
      template: HTMLlocation,
      replacement: bio.contacts.location,
      placeHolder: placeholders.data
    }));

    return jqueryObj;
  }

  function attachHeaderElements() {
    var header, topContacts, headerSkills;
    header = $('#header');
    header.prepend(templateReplacer({
      template: HTMLheaderRole,
      replacement: bio.role,
      placeHolder: placeholders.data
    }));
    header.prepend(templateReplacer({
      template: HTMLheaderName,
      replacement: bio.name,
      placeHolder: placeholders.data
    }));

    attachContactsToElement($('#topContacts'));

    header.append(templateReplacer({
      template: HTMLbioPic,
      replacement: bio.biopic,
      placeHolder: placeholders.data
    }));

    header.append(templateReplacer({
      template: HTMLWelcomeMsg,
      replacement: bio.welcomeMessage,
      placeHolder: placeholders.data
    }));

    header.append(HTMLskillsStart);
    headerSkills = $('#skillsH3');
    bio.skills.forEach(function(elem, index, array) {
      headerSkills.append(templateReplacer({
        template: HTMLskills,
        replacement: elem,
        placeHolder: placeholders.data
      }));
    });
  }

  function attachWorkExperience() {
    var workExperience, workStart;
    workExperience = $('#workExperience');
    workExperience.append(HTMLworkStart);
    workExperience = $('.work-entry');
    work.jobs.forEach(function(job, index, array) {
      workExperience.append(templateReplacer({
        template: templateReplacer({
          template: HTMLworkEmployer + HTMLworkTitle,
          replacement: job.employer,
          placeHolder: placeholders.data
        }),
        replacement: job.title,
        placeHolder: placeholders.data
      }));
      workExperience.append(templateReplacer({
        template: HTMLworkDates,
        replacement: job.dates,
        placeHolder: placeholders.data
      }));
      workExperience.append(templateReplacer({
        template: HTMLworkLocation,
        replacement: job.location,
        placeHolder: placeholders.data
      }));
      workExperience.append(templateReplacer({
        template: HTMLworkDescription,
        replacement: job.description,
        placeHolder: placeholders.data
      }));
    });
  }

  function attachProjects() {
    var projectsDiv = $('#projects');
    projectsDiv.append(HTMLprojectStart);
    projectsDiv = $('.project-entry');
    projects.projects.forEach(function(project, index, array) {
      projectsDiv.append(templateReplacer({
        template: HTMLprojectTitle,
        replacement: project.title,
        placeHolder: placeholders.data
      }));
      projectsDiv.append(templateReplacer({
        template: HTMLprojectDates,
        replacement: project.dates,
        placeHolder: placeholders.data
      }));
      projectsDiv.append(templateReplacer({
        template: HTMLprojectDescription,
        replacement: project.description,
        placeHolder: placeholders.data
      }));
    });
  }

  function attachEducation() {
    var educationDiv = $('#education');
    educationDiv.append(HTMLschoolStart);
    educationDiv = $('.education-entry');
    education.schools.forEach(function(school, index, array) {
      educationDiv.append(templateReplacer({
        template: templateReplacer({
          template: HTMLschoolName + HTMLschoolDegree,
          replacement: school.name,
          placeHolder: placeholders.data
        }),
        replacement: school.degree,
        placeHolder: placeholders.data
      }));

      educationDiv.append(templateReplacer({
        template: HTMLschoolDates,
        replacement: school.dates,
        placeHolder: placeholders.data
      }));

      educationDiv.append(templateReplacer({
        template: HTMLschoolMajor,
        replacement: school.majors.join(', '),
        placeHolder: placeholders.data
      }));

      educationDiv.append()
    });
  }

  function attachFooterContacts() {
    attachContactsToElement($('#footerContacts'));
  }

  function attachElements() {
    attachHeaderElements();
    attachWorkExperience();
    attachProjects();
    attachEducation();
    attachFooterContacts();
  }

  attachElements();
