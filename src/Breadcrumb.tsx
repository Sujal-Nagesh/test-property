import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface BreadcrumbItem {
  path: string;
  label: string;
}

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment !== ''); // Split path into segments

  const breadcrumbItems: BreadcrumbItem[] = pathSegments.map((segment, index) => {
      let path = "/"
      for (let i = 0; i <= index; i++) {
          path += pathSegments[i] + "/"
      }
    return {
      path: path,
      label: segment.replace(/_/g, ' '), // Replace underscores with spaces for labels
    };
  });
    if (location.pathname === "/") {
        return null
    }

  return (
    <nav aria-label="breadcrumb" className="p-4"> {/* Added some padding */}
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center relative">
            <Link to="/" className="text-blue-500 hover:underline">
                Home
              </Link>
            {breadcrumbItems.length > 0 && (
              <span className="mx-2 text-gray-400">/</span>
            )}
          </li>
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="flex items-center relative">
            {index === breadcrumbItems.length - 1 ? (
              <span className="text-gray-700">{item.label}</span>
            ) : (
              <Link to={item.path} className="text-blue-500 hover:underline">
                {item.label}
              </Link>
            )}
            {index < breadcrumbItems.length - 1 && (
              <span className="mx-2 text-gray-400">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;